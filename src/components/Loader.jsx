import React from 'react';

const Loader = () => {
  return (
    <div className='w-full h-[100vh] fixed left-0 top-0 bg-[rgba(0,0,0,0.7)] overflow-hidden grid place-items-center'>
        <span className="loader"></span>
    </div>
  );
}

export default Loader;
