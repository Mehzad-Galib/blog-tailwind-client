import React, { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import { useEffect } from "react";
import AllBlogs from "./AllBlogs";

const MainContent = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await fetch("http://localhost:8080/blogs");
        const data = await response.json();
        setBlogs(data)
      }
      catch(error){
        console.log(error, 'error');
      }
    }
    fetchData();
  },[])
  const reversed = [...blogs].reverse();

 
  
  return (
      <div className='w-full'>
        <h1 className="text-3xl font-bold text-center mb-3 text-purple-700 font-sans">Latest Blogs</h1>
   {
     blogs.length === 0 && <CircularProgress color="secondary" />
   }
   {
     reversed?.map((blog) =><AllBlogs key={blog._id} blog={blog}></AllBlogs>)
   }
    </div>
  );
};

export default MainContent;
