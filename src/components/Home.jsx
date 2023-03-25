import React from 'react';
import Search from './Search';
import UserResults from './UserResults';

const Home = () => {
  return (
    <div className=' w-[90%] mx-auto my-16  min-h-[calc(100vh-4rem)]  flex flex-col items-center'>
        <Search/>
        <UserResults/>
    </div>
  );
}

export default Home;
