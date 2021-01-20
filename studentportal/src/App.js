import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Blog from "./components/Blog/Blog";
import BranchSection from "./components/BranchSection/BranchSection";
import Documentation from "./components/Documentation/Documentation";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/web-development"
              component={() => <BranchSection name="Web Development" />}
            />
            <Route
              exact
              path="/app-development"
              component={() => <BranchSection name="App Development" />}
            />
            <Route
              exact
              path="/robotics"
              component={() => <BranchSection name="Robotics and IoT" />}
            />
            <Route
              exact
              path="/machine-learning"
              component={() => <BranchSection name="Machine Learning" />}
            />
            <Route
              exact
              path="/competitive-programming"
              component={() => <BranchSection name="Competitive Programming" />}
            />
            <Route
              exact
              path="/ar-vr"
              component={() => <BranchSection name="AR/VR" />}
            />
            <Route
              exact
              path="/3d-modelling"
              component={() => <BranchSection name="3D Modelling" />}
            />
            <Route
              exact
              path="/cloud-computing"
              component={() => <BranchSection name="Cloud Computing" />}
            />
            <Route
              exact
              path="/terms-and-policy"
              component={() => <Documentation name="Terms and Policy" />}
            />
            <Route path="/" component={Error} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
