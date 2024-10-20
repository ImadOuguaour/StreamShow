import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from "./SearchBarThunk";
import { useAppDispatch } from "../../store";


export const SearchBar:React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState<string>(() => searchParams.get('search') || '');
    const dispatch = useAppDispatch();
    const intl = useIntl(); 

    const handleSearchChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        if (value.trim() === '') {
        searchParams.delete('search');
        setSearchParams(searchParams);
        } else {
        // Sinon, on met à jour l'URL avec le paramètre 'search'
        setSearchParams({ search: value });
        }
    }
    const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        dispatch(fetchSearch(searchValue));
    }
    return(
        <form className="flex items-center w-full md:w-auto" onSubmit={handleSearch}>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChanged}
              placeholder={intl.formatMessage({ id: "searchPlaceholder" })}
              className="px-2 py-1 rounded-md text-gray-800"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400"
            >
              <FormattedMessage id="search" />
            </button>
          </form>
    )
}