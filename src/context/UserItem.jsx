import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const UserItem = ({ user }) => {
  return (
    <div className="h-56 w-72 sm:w-64  shadow-blue-400  rounded-lg shadow-md flex flex-col items-center justify-between overflow-hidden relative">
      <div className="w-full bg-[#ee6c4d] h-[40%] relative">
        <div className="absolute right-2 top-2 group">
          <Link to={`user/${user.login}`} className>
            <CgProfile size={30}/>
          </Link>
        </div>
        <div className="rounded-[50%] overflow-hidden h-28 w-28 absolute top-1/2 left-1/2 -translate-x-1/2">
          <img
            src={user.avatar_url}
            alt="user-image"
            className="object-cover"
          />
        </div>
      </div>
      <div className="bg-[#293241] w-full h-[60%] ">
        <span className="absolute bottom-7 left-1/2 -translate-x-1/2 uppercase text-white text-2xl">
          {user.login}
        </span>
      </div>
    </div>
  );
};

export default UserItem;
