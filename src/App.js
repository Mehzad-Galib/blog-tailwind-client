import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/Login/SignUp";
import SingleBlog from "./Components/SingleBlog";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/Login/PrivateRoute";
import BlogList from "./Components/Dashboard/BlogList";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="bg-gray-200">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />

            <PrivateRoute path="/dashboard/createPost">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/blogList">
              <BlogList></BlogList>
            </PrivateRoute>

            <Route path="/singleBlog/:id">
              <SingleBlog></SingleBlog>
            </Route>

            <Route path="/signUp" component={SignUp} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
