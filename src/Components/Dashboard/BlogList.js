import React from 'react'
import DeleteBlog from './DeleteBlog';
import Sidebar from "./Sidebar";

const BlogList = () => {
    return (
        <div>
      <div className="flex mt-16">
        <div className="w-full mx-2 md:w-1/3">
            <Sidebar />
        </div>
        <div className="w-full md:w-2/3">
            <DeleteBlog />
        </div>
      </div>
    </div>
    )
}

export default BlogList
