import React, { useContext } from "react";
import GithubContext from "../context/githubcontext";
import UserItem from "../context/UserItem";
import Loader from "./Loader";
import { AnimatePresence, motion } from "framer-motion";
const UserResults = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <AnimatePresence>
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-5 ">
          {users.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <UserItem key={user.id} user={user} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    );
  }
};

export default UserResults;
