import React, { useEffect, useContext } from "react";
import GithubContext from "../context/githubcontext";
import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion, spring } from "framer-motion";
import Loader from "./Loader";
import {
  FaCodepen,
  FaUserFriends,
  FaUsers,
  FaStore,
  FaGithub,
  FaArrowCircleLeft,
  FaCaretRight,
  FaLocationArrow,
  FaTwitter,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Repos from "./Repos";
const SingleUserPage = () => {
  const { getSingleUser, user, loading, getUserRepos, repos } =
    useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getSingleUser(params.login);
    getUserRepos(params.login);
  }, []);

  //GETTING ALL THOSE NEEDED VALUES FROM THE API THAT WOULD BE USED FOR A SINGLE USER
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <AnimatePresence>
        <div className="my-16 w-[90%] mx-auto py-6">
          <Link to="/" className="text-white flex items-center gap-2  ">
            <FaArrowCircleLeft />
            BACK TO HOME
          </Link>
          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-2">
            <section className="card w-72 mx-auto sm:mx-0  sm:h-56 sm:w-56 overflow-hidden my-6 rounded-md shadow-md shadow-white relative group hover:scale-110 transition duration-300 ease-in-out" >
              <motion.img
                src={avatar_url}
                alt="user-profile-pic"
                className="object-cover"
                initial={{opacity:0}} animate={{opacity:1}}
              />
              <span
                className="absolute text-white bg-pink-600 top-0 h-full  left-0 text-center w-full flex items-center justify-center text-3xl bg-opacity-50 translate-y-full transition-all group-hover:translate-y-0 uppercase"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
              >
                {user.name}
              </span>
            </section>
            <div className="name flex flex-col gap-2 col-span-1 lg:col-span-2  lg:mx-0">
              <motion.h2
                className="text-white text-3xl uppercase"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {user.name}
              </motion.h2>
              <motion.small
                className="text-white text-lg flex gap-3 items-center"
                transition={{ type: "spring", stiffness: 500}}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
              >
                <FaGithub />
                {user.login}
              </motion.small>
              <motion.section className="flex gap-3 items-center" initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3}}>
                <span className="bg-green-500 rounded-md py-1 px-2">
                  {type}
                </span>
                {hireable && (
                  <span className="bg-violet-500 rounded-md py-1 px-2">
                    Hireable
                  </span>
                )}
              </motion.section>
              <motion.section className="flex gap-3 flex-col lg:flex-row" initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3}}>
                {location && (
                  <div className="flex items-center gap-3 shadow-md shadow-[#754668] px-2 py-1 rounded-xl ">
                    <span className="text-lg font-bold text-green-600">
                      <FaLocationArrow />
                    </span>
                    <span className="text-lg text-white">{location}</span>
                  </div>
                )}
                {blog && (
                  <div className="flex items-center gap-3 shadow-md shadow-[#754668] px-2 py-1 rounded-xl ">
                    <span className="text-lg font-bold text-red-600">
                      <FaAngleDoubleRight />
                    </span>
                    <a
                      href={`https://${blog}`}
                      rel="noreferrer"
                      target="_blank"
                      className="text-lg text-white"
                    >
                      {blog}
                    </a>
                  </div>
                )}
              </motion.section>
              <motion.p className="text-white font-medium" initial={{x:-100}} animate={{x:0}}>{bio}</motion.p>
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 py-2  rounded-lg text-white flex items-center justify-center  group"
              >
                <span className="opacity-0   group-hover:opacity-100 group-hover:scale-125 transition-all">
                  <FaCaretRight />
                </span>
                <span>VISIT GITHUB PROFILE</span>
              </a>
            </div>
          </div>
          <div className="stats grid md:gap-3 md:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-1 ">
            <motion.div className=" hover:bg-pink-700 transition-colors hover:shadow-white  shadow-md shadow-blue-400 flex flex-row-reverse justify-between py-3 px-4 mt-7 rounded-md items-center" initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5}}>
              <FaUsers size={30} color="white" />
              <div className="followers text-2xl flex flex-col">
                <span className="font-medium text-lg text-white uppercase">
                  Followers:
                </span>
                <span className="text-white">{followers}</span>
              </div>
            </motion.div>
            <motion.div className=" hover:bg-pink-700 hover:shadow-white transition-colors flex flex-row-reverse justify-between py-3 px-4 mt-7 rounded-md items-center shadow-md shadow-blue-400" initial={{scale:0}} animate={{scale:1}} transition={{delay:0.7}}>
              <FaUserFriends size={30} color="white" />
              <div className="followers text-2xl flex flex-col">
                <span className="font-medium text-lg text-white uppercase">
                  Following:
                </span>
                <span className="text-white">{following}</span>
              </div>
            </motion.div>
            <motion.div className="hover:bg-pink-700 hover:shadow-white transition-colors  flex flex-row-reverse justify-between py-3 px-4 mt-7 rounded-md items-center shadow-md shadow-blue-400" initial={{scale:0}} animate={{scale:1}} transition={{delay:0.9}}>
              <FaCodepen size={30} color="white" />
              <div className="followers text-2xl flex flex-col">
                <span className="font-medium text-lg text-white uppercase">
                  Public Repos:
                </span>
                <span className="text-white">{public_repos}</span>
              </div>
            </motion.div>
            <motion.div className="hover:bg-pink-700 hover:shadow-white transition-colors  flex flex-row-reverse justify-between py-3 px-4 mt-7 rounded-md items-center shadow-md shadow-blue-400" initial={{scale:0}} animate={{scale:1}} transition={{delay:1.1}}>
              <FaStore size={30} color="white" />
              <div className="followers text-2xl flex flex-col">
                <span className="font-medium text-lg text-white uppercase">
                  Public Gists:
                </span>
                <span className="text-white">{public_gists}</span>
              </div>
            </motion.div>
          </div>
          <Repos repos={repos} />
        </div>
      </AnimatePresence>
    );
  }
};

export default SingleUserPage;
