import React from "react";
import { useEffect, useState } from "react";

const DeleteBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const handleDelete = (id) =>{
    fetch(`http://localhost:8080/delete/${id}`, {
        method: 'DELETE'
    })
    .then(result=> {

    })
}

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch("http://localhost:8080/blogs");
                const data = await response.json()
                setBlogs(data)
            }
            catch(err){
                console.log(err);
            }
            
        }
        fetchData()
    },[])

  return (
    <div className="md:px-10 py-auto w-full">
      <h1 className="text-3xl font-bold mb-2 text-center text-blue-500">Blog List</h1>
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Author
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Blog Title
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Publish Date
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {blogs.map((blog) => {
              return (
                <tr key={blog._id}>
                  <td className="w-1/3 text-left py-3 px-4">{blog.author}</td>
                  <td className="w-1/3 text-left py-3 px-4">{blog.title}</td>
                  <td className="text-left py-3 px-4">{blog.date}</td>
                  <td className="text-left py-3 px-4">
                      <button onClick={()=> handleDelete(blog._id)} className='bg-red-600 rounded-lg px-3 py-2 hover:bg-red-500 font-semibold text-gray-200'>Delete Blog</button>
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteBlog;
