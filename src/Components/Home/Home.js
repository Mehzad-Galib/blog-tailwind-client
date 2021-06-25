import React from "react";
import MainContent from "./MainContent";
// import TopBanner from "./TopBanner";
import SideContent from "./SideContent";

const Home = () => {
  return (
    <div>
      {/* <TopBanner /> */}

      <div className="flex mt-16">

        <div className="max-w-full mx-4 md:w-2/3">
          <MainContent />
        </div>
        <div className="md:w-1/3 max-w-full">
          <SideContent />
      </div>
      </div>
    </div>
  );
};

export default Home;
