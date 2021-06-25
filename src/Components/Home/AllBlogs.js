import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const allBlogs = (props) => {
  const { _id, author, image, date, title, body } = props.blog;
  return (
    <div className='md:w-full max-w-full'>
      <Nav.Link
        as={Link}
        to={`/singleBlog/${_id}`}
        className="rounded-lg shadow-md w-full lg:flex mb-10"
      >
        {/* Image Div */}
        
        {/* Content DIV */}
        <div className="bg-white hover:bg-gray-100 rounded px-8 flex flex-col leading-normal">
          <div>
            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl text-center mb-2">
              {title}
            </div>
            <p className="text-gray-700  text-justify">{body}....</p>
          </div>
          <div className="flex mt-3 mb-2">
            <img
              src={image}
              alt=""
              className="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-700 text-sm capitalize">
                {author}
              </p>
              <p className="text-gray-600 text-xs"> {date} </p>
            </div>
          </div>
        </div>
      </Nav.Link>
    </div>
  );
};

export default allBlogs;
