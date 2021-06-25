import React from "react";
import { Nav } from "react-bootstrap";


const Footer = () => {
  return (
    <div className='object-bottom object-none'>
      <footer className="px-6 py-2  text-gray-100 bg-gray-800">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">

          <Nav.Link target="_blank" href={`https://mehzad-galib-portfolio.netlify.app/`} className="text-2xl font-bold">
            Mehzad Galib
          </Nav.Link>

          <p className="mt-2 font-semibold">All Rights Reserved 2021</p>

          <div className="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
            
            <Nav.Link target="_blank" href={`https://www.linkedin.com/in/mehzad-galib/`} className="mx-2 text-gray-100 hover:text-blue-400">
              <svg viewBox="0 0 512 512" className="w-7 h-7 fill-current">
                <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
              </svg>
            </Nav.Link>

            <Nav.Link target="_blank" href={`https://www.facebook.com/mehzad.galib/`} className="mx-2 text-gray-100 hover:text-blue-800">
              <svg viewBox="0 0 512 512" className="w-7 h-7 fill-current hover:translate-x-2">
                <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
              </svg>
            </Nav.Link>

            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
