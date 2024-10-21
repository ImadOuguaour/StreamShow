import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";

import { RootState, useAppDispatch, useAppSelector } from "../../store";
import DisplayMedia from "../../components/DisplayMedia";
import useDebounce from "../../hooks/useDebounce";

import { fetchSearch } from "./SearchThunk";
import { clearSearch } from "./SearchSlice";

const Search: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState<string>(() => searchParams.get('search') || '');
    const [currentPage, setCurrentPage] = useState(1);
    const { resultSearch, loading, error, totalResults } = useAppSelector((state: RootState) => state.search);
    const dispatch = useAppDispatch();
    const intl = useIntl();

    const DEBOUNCE_DELAY = 1500; 
    const debouncedSearchValue = useDebounce(searchValue, DEBOUNCE_DELAY);

    useEffect(() => {
      if (debouncedSearchValue) {
          setSearchParams({ search: debouncedSearchValue });
      } else {
          searchParams.delete('search');
          setSearchParams(searchParams);
          dispatch(clearSearch());
      }
    }, [debouncedSearchValue, searchParams, setSearchParams, dispatch]);

    useEffect(() => {
      if (debouncedSearchValue) {
        dispatch(fetchSearch(debouncedSearchValue, currentPage));  
      }
    }, [debouncedSearchValue, currentPage, dispatch]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handleSearchChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCurrentPage(1);
        setSearchValue(value);
    };

    return (
      <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-4 flex items-start justify-center">
        <input
            className="bg-gradient-to-b from-gray-900 to-gray-800 mt-10 px-4 py-2 w-1/2 md:w-1/3 border border-gray-300 rounded-md shadow-md text-white"
            onChange={handleSearchChanged}
            placeholder={intl.formatMessage({ id: "searchPlaceholder" })}
            type="text"
            value={searchValue}
        />
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-2 items-start justify-center pl-3">
        { (totalResults === 0) ?
            (<span><FormattedMessage id="noItemFound" /></span>)
            :
            (<span>{totalResults} <FormattedMessage id="itemsFound" /></span>)
        }
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen p-4">
        {resultSearch?.length > 0 && (
          <DisplayMedia
              currentPage={currentPage}
              error={error}
              loading={loading}
              medias={resultSearch}
              onNextPage={handleNextPage}
              onPreviousPage={handlePreviousPage}
          />
      )}
      </div>
    </>
  
    );
};

export default Search;
