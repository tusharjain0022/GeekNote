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
            path="/first-year-cse"
            component={() => <BranchSection name="First Year CSE" />}
          />
          <Route
            exact
            path="/first-year-ece"
            component={() => <BranchSection name="First Year ECE" />}
          />
          <Route
            exact
            path="/second-year-cse"
            component={() => <BranchSection name="Second Year CSE" />}
          />
          <Route
            exact
            path="/second-year-ece"
            component={() => <BranchSection name="Second Year ECE" />}
          />
          <Route
            exact
            path="/third-year-cse"
            component={() => <BranchSection name="Third Year CSE" />}
          />
          <Route
            exact
            path="/third-year-ece"
            component={() => <BranchSection name="Third Year ECE" />}
          />
          <Route
            exact
            path="/fourth-year-cse"
            component={() => <BranchSection name="Fourth Year CSE" />}
          />
          <Route
            exact
            path="/fourth-year-ece"
            component={() => <BranchSection name="Fourth Year ECE" />}
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
