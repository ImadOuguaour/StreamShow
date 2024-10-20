import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const Header: React.FC = () => {
const intl = useIntl(); 
  return (
    <nav className="bg-gray-900 p-4">
      <div className="mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-white text-xl font-bold"></h1>

        <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:mr-4">
            <li>
              <a href="/" className="text-white hover:text-gray-400">
                <FormattedMessage id="home" />
              </a>
            </li>
            <li>
              <a href="/movies" className="text-white hover:text-gray-400">
                <FormattedMessage id="movies" />
              </a>
            </li>
            <li>
              <a href="/series" className="text-white hover:text-gray-400">
                <FormattedMessage id="series" />
              </a>
            </li>
          </ul>
          <form className="flex items-center w-full md:w-auto">
            <input
              type="text"
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
