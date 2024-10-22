import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const NotFound:React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-400">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-500">
            <FormattedMessage id="404" />
            </h2>
            <p className="mt-2 text-gray-600">
              <FormattedMessage id="pageNotFoundMessage" />
            </p>
            <Link
              className="mt-6 inline-block px-6 py-3 text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
              to="/"
            >
              <FormattedMessage id="backHome" />
            </Link>
          </div>
        </div>
      );
}

export default NotFound;