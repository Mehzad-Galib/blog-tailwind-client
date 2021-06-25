import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [authorImage, setAuthorImage] = useState(null);
  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) =>{
    const userData = {...data, cover: coverImage, image:authorImage}
    console.log(userData);
    fetch("https://stormy-gorge-44936.herokuapp.com/addBlog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
    .then((res) => res.json())
    .then((result=> console.log(result)));
  }

  const handleCoverImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "56fe43fe48b43891b85625d12ba9d450");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const url = response.data.data.display_url;
        console.log(response.data.data.display_url);
        setCoverImage(url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleAuthorImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "56fe43fe48b43891b85625d12ba9d450");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const url = response.data.data.display_url;
        console.log(response.data.data.display_url);
        setAuthorImage(url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
    
      {/* author info part */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex-1 mx-2">
            <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
              <input {...register("author", { required: true, maxLength: 80 })}
                placeholder="Full Name"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
              />{" "}
            </div>
          </div>

          <div className="w-full flex-1 mx-2">
            <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
              <input {...register("title", { required: true, maxLength: 80 })}
                placeholder="Blog Title"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
              />{" "}
            </div>
          </div>
          <div className="w-full flex-1 mx-2">
            <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
              <input {...register("date", { required: true, maxLength: 80 })}
                placeholder="Date"
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
              />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* image part */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex-1 mx-2">
            <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
            <label htmlFor="" className="font-semibold text-gray-800">Upload Cover Image</label>
              <input
                name="coverImage"
                type="file"
                onChange={(event) => handleCoverImageUpload(event)}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
              />{" "}
            </div>
          </div>
          <div className="w-full flex-1 mx-2">
            <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <label htmlFor="" className="font-semibold text-gray-800">Author Image</label>
              <input
                name="authorImage"
                type="file"
                onChange={(event) => handleAuthorImageUpload(event)}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mb-6">
        <div className="w-full px-3">
          <textarea {...register("body", { required: true, maxLength: 800 })}
            placeholder="Write Your Blog here"
            className="no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
          ></textarea>
        </div>
      </div>
      <button type='submit' className="rounded-lg hover:bg-green-300 bg-green-500 px-5 py-3 font-semibold text-gray-200">Add Review</button>
    </form>
  );
};

export default CreatePost;
