import React from "react";
import Pagination from "./Pagination";

const searchResults = ({ results }) => {
  return (
    <>
      <div className="mx-auto px-3 w-full sm:pl-[4%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-md mb-5 mt-3">
          About {results.searchInformation?.formattedTotalResults} results{" "}
          {results.searchInformation?.formattedSearchTime} seconds
        </p>
        {results.items?.map((result) => {
          return (
            <div
              key={result.link}
              className="w-full sm:mb-8 sm:w-3/4 mb-4  py-2 shadow-md"
            >
              <div className="group">
                <a href={result.link} >
                <h2 className="text-sm truncate text-gray-700">
                {result.formattedUrl}
                  </h2>
                  
                </a>
                <a href={result.link}>
                  <h2 className="text-xl truncate text-blue-800 font-medium group-hover:underline  my-2">
                    {result.title}
                  </h2>
                </a>
              </div>
              <p className="line-clamp-2">{result.snippet}</p>
            </div>
          );
        })}
        <Pagination />
      </div>
    </>
  );
};

export default searchResults;
