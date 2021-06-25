import React from "react";
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router";

const SingleBlog = () => {
  let {id} = useParams();
  const [blogDetail, setBlogDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8080/singleBlog/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogDetail(data));
  }, [id]);

  const { author, cover, field, image, date, title, body } = blogDetail;
  return (
    <div className="mt-10">

      {/* Cover Image Part */}
      <div
        className="mb-4 md:mb-0 max-w-screen-md w-full mx-auto relative left-0 top-0 h-full z-0 object-fit"
        style={{ backgroundImage: `url('${cover}')` }}
      >
        <div className="p-4 relative bottom-0 left-0 z-20">
          <Nav.Link
            href="#"
            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
          >
            {field}
          </Nav.Link>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {title}
          </h2>
          <div className="flex mt-3">
            <img
              src={image}
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt=""
            />
            <div>
              <p className="font-semibold text-gray-200 text-sm">
                {author}
              </p>
              <p className="font-semibold text-gray-400 text-xs"> {date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full article part */}
      <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p className="pb-6">
          {body}
        </p>

      </div>
    </div>
  );
};

export default SingleBlog;
