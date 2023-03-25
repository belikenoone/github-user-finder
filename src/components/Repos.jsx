import React from "react";
import RepoItem from "./RepoItem";
import { AnimatePresence, motion } from "framer-motion";
const Repos = ({ repos }) => {
  return (
    <div className="my-9 grid grid-cols-1 gap-5">
      <h3 className="text-white text-3xl py-3 relative bg-pink-500 -skew-x-6 px-3">
        LATEST REPOSITORIES:
      </h3>
      {repos.map((repo) => (
        <div>
          <RepoItem key={repo.id} repo={repo} />
        </div>
      ))}
    </div>
  );
};

export default Repos;
