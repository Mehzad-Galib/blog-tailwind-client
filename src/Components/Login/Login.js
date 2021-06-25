import React, { useContext } from "react";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import firebaseConfig from './firebase.config'
import { useForm } from "react-hook-form";


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data)=>{
    // console.log(data);
    const {email, password} = data;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    
  });
  }

  const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {});
  };

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email: email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="relative h-screen flex py-12 px-6 my-auto mx-auto w-full items-center justify-center max-w-s">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back!!
          </h2>
          {
            loggedInUser && <p className="text-center font-semibold">{loggedInUser.name}</p>
          }
          <p className="mt-2 mb-5 font-semibold text-sm text gray-600">
            Sign in using the following accounts
          </p>
        </div>

        <div className="btn-wrapper text-center">
          <button
            className="bg-white hover:bg-blue-500 active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs"
            onClick={() => handleFbSignIn()}
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span className="font-semibold mx-2">Facebook</span>
          </button>
          <button
            className="bg-white hover:bg-green-700 active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs"
            onClick={() => handleGoogleLogin()}
          >
            <FontAwesomeIcon icon={faGoogle} />
            <span className="font-semibold mx-2">Google</span>
          </button>
        </div>

        <hr className="mt-2 border-b-1 border-gray-400"></hr>
        <p className="font-semibold text-center mt-3">
          or Sign in using credentials
        </p>
        <div className="mb-4 mt-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>

          <input {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Username"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input  {...register("password", { required: "Password is required!" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="password"
            placeholder="password"
          ></input>
        </div>
        <div className="flex items-center space-x-7">
          <div className="flex items-cent">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember Me
            </label>
          </div>
          <Link
            to="/forgot_email"
            className="inline-block align-baseline font-bold text-sm text-blue-500"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full h-12 hover:bg-indigo-600 rounded-full bg-blue-800 font-semibold text-gray-100"
          >
            Sign In
          </button>
        </div>
        <p className="flex-flex-col items-center justify-center text-gray-600 mt-7">
          Don't have an account?
        </p>
        <Link className="text-green-700" to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
