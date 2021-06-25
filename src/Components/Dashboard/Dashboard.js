import React from "react";
import CreatePost from "./CreatePost";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex space-x-0 mt-16">
        <div className="w-full md:w-1/3">
            <Sidebar />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold text-green-700 text-center mb-2">Publish your own Blog</h1>
            <CreatePost />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
