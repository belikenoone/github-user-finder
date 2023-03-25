import React,{useState,useContext} from 'react';
import GithubContext from '../context/githubcontext';
import { motion } from 'framer-motion';
const Search = () => {
    const {getUsers,users,clearUsers}=useContext(GithubContext)
    const [text,setText]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.length === 0){
            return 
        }
        getUsers(text)
        setText("")
    }
  return (
    <form className='mt-8 flex gap-4 flex-col w-[90%] mx-auto self-center md:flex-row ' onSubmit={handleSubmit}>
      <input type="text" placeholder='Search Here...' className='rounded-lg py-2 px-3'value={text} onChange={(e)=>setText(e.target.value)}/>
      <motion.button className='bg-cyan-500 py-2 px-2 rounded-lg ' whileTap={{scale:0.7}}>Search</motion.button>
      {users.length>0 && <motion.button className='bg-[#bac7be] py-2 px-2 rounded-lg ' onClick={clearUsers} whileTap={{scale:0.7}}>Clear</motion.button>}
    </form>
  );
}

export default Search;
