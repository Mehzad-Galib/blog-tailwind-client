import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  console.log(loggedInUser);

  // let userData;

  const onSubmit = (data) => {
    // userData = data;
    const { email, password, name } = data;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const setUser = {name: name, email: email};
        setLoggedInUser(setUser)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="relative h-screen mx-auto my-auto justify-center items-center flex px-6 py-5 max-w-s">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-md px-6 py-5 mb-3 mt-1 bg-white"
      >
        <div className="text-center">
          <h1 className="font-bold text-2xl">Register with your Email</h1>
        </div>

        {/* Sign in form */}
        <div className="mb-4 mt-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Name
          </label>
          <input
            {...register("name", { required: true, maxLength: 80 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Full Name"
          ></input>
        </div>

        <div className="mb-4 mt-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", {
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
          <input
            {...register("password", { required: "Password is required!" })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="password"
            placeholder="password"
          ></input>
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            {...register("passwordConfirmation", {
              required: "Please confirm password!",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              },
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="confirmPassword"
          ></input>
          {errors.passwordConfirmation && (
            <p style={{ color: "white" }}>
              {errors.passwordConfirmation.message}
            </p>
          )}
        </div>

        <div className="mt-5 mb-5">
          <button
            type="submit"
            className="w-full h-12 hover:bg-indigo-600 rounded-full bg-blue-800 font-semibold text-gray-100"
          >
            Register
          </button>
        </div>

        <p className="text-gray-600 font-semibold text-center mb-3">
          Or Register using the following account
        </p>

        <div className="flex flex-row space-x-3 justify-center items-center">
          <button className="bg-white hover:bg-blue-500 active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs">
            <FontAwesomeIcon icon={faFacebook} />
            <span className="font-semibold mx-2">Facebook</span>
          </button>
          <button className="bg-white hover:bg-green-700 active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs">
            <FontAwesomeIcon icon={faGoogle} />
            <span className="font-semibold mx-2">Google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
