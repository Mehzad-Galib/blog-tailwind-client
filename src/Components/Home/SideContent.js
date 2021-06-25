import React from "react";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

const SideContent = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="md:block hidden">
      <div className="px-8">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>

        <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
          <ul className="-mx-4">
            {blogs?.map((blog) => {
              return (
                <li key={blog._id} className="flex items-center mt-3">
                  <img
                    src={blog.image}
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full"
                  />
                  <p>
                    <Nav.Link
                       
                      className="mx-1 font-bold text-gray-700 hover:underline"
                    >
                      {blog.author}
                    </Nav.Link>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="px-8 mt-10">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
        <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
          <ul>
            {blogs?.map((blog) => {
              return (
                <li key={blog._id}>
                  <Nav.Link
                    
                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  >
                    {blog.field}
                  </Nav.Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* <div className="px-8 mt-10">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
        <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <Nav.Link
              
              className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500"
            >
              {blogs[blogs.length-1].author}
            </Nav.Link>
          </div>
          <div className="mt-4">
            <Nav.Link
               
              className="text-lg font-medium text-gray-700 hover:underline"
            >
              {blogs[blogs.length-1].title}
            </Nav.Link>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <img
                src={blogs[blogs.length-1].image}
                alt="avatar"
                className="object-cover w-8 h-8 rounded-full"
              />
              <Nav.Link
                 
                className="mx-3 text-sm text-gray-700 hover:underline"
              >
                {blogs[blogs.length-1].author}
              </Nav.Link>
            </div>
            <span className="text-sm font-light text-gray-600">
            {blogs[blogs.length-1].date}
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SideContent;
