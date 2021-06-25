import React, { useEffect } from "react";
import user1 from '../../Images/user1.jpg'
import {Link} from 'react-router-dom'
import blogInfo from '../../blog_info.json'
import { useState } from "react";


const TopBanner = () => {
  const [blogData, setBlogData] = useState(null)
  useEffect(() => {
    setBlogData(blogInfo)
  },[])
  console.log(blogData);
  return (
    <>
    <button as={Link} to={`/singleBlog`} className="w-full md:w-1/3 relative container rounded mt-6 justify-content-between">
      <div
        className="relative left-2 top-2 w-full h-full z-10 bg-cover mx-2"
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`}}
      >
        
        <div className="p-4 align-items-start justify-items-end relative bottom-2 left-2 z-20">
            <p className="px-4 py-4 bg-black text-gray-200 inline-flex mb-3 align-items-start mr-auto">Science</p>
            <h1 className="text-xl bg-none leading-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, vitae itaque cumque numquam perspiciatis consequatur.
            </h1>
            <div className="flex mt-3">

                <img className='h-10 w-10 rounded-full mr-2 object-cover' src={user1} alt="" />

                <div className="">
                <p className="font-semibold text-gray-900 text-sm">
                    Eriksen
                </p>
                <p className="font-semibold text-gray-600 text-xs">
                    15 June
                </p>
                </div>
                
            </div>
        </div>
      </div>
    </button>
    <button as={Link} to={`/singleBlog`} className="w-full md:w-1/3 relative container rounded mt-6">
      <div
        className="relative left-2 top-2 w-full h-full z-10 bg-cover"
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`}}
      >
        
        <div className="p-4 align-items-start justify-items-end relative bottom-2 left-2 z-20">
            <p className="px-4 py-4 bg-black text-gray-200 inline-flex mb-3 align-items-start mr-auto">Science</p>
            <h1 className="text-xl bg-none leading-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, vitae itaque cumque numquam perspiciatis consequatur.
            </h1>
            <div className="flex mt-3">

                <img className='h-10 w-10 rounded-full mr-2 object-cover' src={user1} alt="" />

                <div className="">
                <p className="font-semibold text-gray-900 text-sm">
                    Eriksen
                </p>
                <p className="font-semibold text-gray-600 text-xs">
                    15 June
                </p>
                </div>
                
            </div>
        </div>
      </div>
    </button>
    <button as={Link} to={`/singleBlog`} className="w-full md:w-1/3 relative container rounded mt-6">
      <div
        className="relative left-2 top-2 w-full h-full z-10 bg-cover"
        style={{backgroundImage: `url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`}}
      >
        
        <div className="p-4 align-items-start justify-items-end relative bottom-2 left-2 z-20">
            <p className="px-4 py-4 bg-black text-gray-200 inline-flex mb-3 align-items-start mr-auto">Science</p>
            <h1 className="text-xl bg-none leading-tight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, vitae itaque cumque numquam perspiciatis consequatur.
            </h1>
            <div className="flex mt-3">

                <img className='h-10 w-10 rounded-full mr-2 object-cover' src={user1} alt="" />

                <div className="">
                <p className="font-semibold text-gray-900 text-sm">
                    Eriksen
                </p>
                <p className="font-semibold text-gray-600 text-xs">
                    15 June
                </p>
                </div>
                
            </div>
        </div>
      </div>
    </button>
    </>
  );
};

export default TopBanner;
