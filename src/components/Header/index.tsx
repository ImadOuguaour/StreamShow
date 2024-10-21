import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="mx-auto flex flex-wrap justify-between items-center">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:mr-4">
          <li>
            <Link className="text-white hover:text-gray-400" to="/">
              <FormattedMessage id="home" />
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-400" to="/movies">
              <FormattedMessage id="movies" />
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-400" to="/series">
              <FormattedMessage id="series" />
            </Link>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:mr-4">
            <li>
              <Link to="/search">
                <span className="text-white hover:text-gray-400"><FormattedMessage id="search"/></span>
                <button
                  className="p-2 bg-transparent text-blue-500 rounded-md focus:outline-none"
                  type="button"
                >
                  <FaSearch />
                </button>
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
