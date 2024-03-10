import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path); // Split the pathname and remove empty strings

  return (
    <nav className="flex items-start space-x-2 text-sm font-medium p-1 mx-28">
      <Link to="/" className="text-gray-600">
        Home
      </Link>
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          <FaChevronRight className="h-4 w-4 text-gray-500" />
          <Link
            to={`/${paths.slice(0, index + 1).join("/")}`}
            className="text-black "
          >
            {path}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
