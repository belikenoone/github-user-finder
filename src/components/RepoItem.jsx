import React from "react";
import { FaEye, FaUtensils, FaInfo, FaLink, FaStar } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="bg-gray-700 hover:bg-gray-800 shadow-sm flex flex-col shadow-white py-2 px-4 rounded-lg group">
      <div className="text-white flex flex-col justify-center">
        <a href={html_url} target="_blank" rel="noreferrer" className="flex items-center gap-3 py-2 text-xl border-b-2 border-b-violet-200">
          <FaLink />
          {name}
        </a>
        <p className="py-1">{description}</p>
      </div>
      <div className="stats flex gap-4 mt-2">
        <div className="flex items-center gap-1 bg-blue-500 py-1 px-2 rounded-md">
          <FaEye />
          {watchers_count}
        </div>
        <div className="flex items-center gap-1  bg-orange-500 py-1 px-2 rounded-md">
          <FaStar />
          {stargazers_count}
        </div>
        <div className="flex items-center gap-1  bg-red-700 py-1 px-2 rounded-md text-white">
          <FaInfo />
          {open_issues}
        </div>  
        <div className="flex items-center gap-1  bg-indigo-600 py-1 px-2 rounded-md text-white">
          <FaUtensils />
          {forks}
        </div>

      </div>
    </div>
  );
};

export default RepoItem;
