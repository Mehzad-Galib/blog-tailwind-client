import React from "react";
import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Components/Login/firebase.config";


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  

  const signOut = () => {
    return (firebase
      .auth()
      .signOut()
      .then(() => {
        // setLoggedInUser({})
        
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      }))
  };
  return (
    <nav className="bg-white shadow" role="navigation">
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div className="mr-4 md:mr-8 flex flex-row">
          <Nav.Link as={Link} to={`/home`} rel="home">
            <div className="flex flex-row">
            <svg
              className="w-10 h-10 text-purple-600"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>TailwindCSS</title>
              <path
                fill="currentColor"
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              ></path>
            </svg>
            <h1 className="text-3xl font-bold text-green-700 mx-3">Blog Mania</h1>
            </div>
            

          </Nav.Link>

        </div>
        <div className="ml-auto md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div>
          <ul className="inline-flex items-center"></ul>
        </div>

        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li className="px-2 md:px-4">
              <Nav.Link
                as={Link}
                to={`/home`}
                className="text-gray-500 hover:border-b-4 font-semibold hover:text-purple-500"
              >
                Home
              </Nav.Link>
            </li>

            <li className="px-2 md:px-4">
              <Nav.Link
                as={Link}
                to={`/dashboard/createPost`}
                className="text-gray-500 font-semibold hover:text-purple-500"
              >
                Dashboard
              </Nav.Link>
            </li>

            {loggedInUser.name ? (
              <li className="px-2 md:px-4 hidden md:block">
                <button
                  onClick={()=> signOut()}
                  className="text-gray-500 font-semibold hover:text-purple-500"
                >
                  {loggedInUser.name}
                </button>
              </li>
            ) : (
              <li className="px-2 md:px-4 hidden md:block">
                <Nav.Link
                  as={Link}
                  to={`/login`}
                  className="text-gray-500 font-semibold hover:text-purple-500"
                >
                  {" "}
                  Login/Register
                </Nav.Link>
              </li>
            )}

            {loggedInUser.name && (
              <li className="px-2 md:px-4 hidden md:block">
                <button
                  onClick={()=> {
                    console.log('clicked');
                    return signOut()
                  }}
                  className="text-gray-500 font-semibold hover:text-purple-500"
                >
                  Sign Out
                </button>
              </li>
            ) }

           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
