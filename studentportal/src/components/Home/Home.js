import "./Home.css";
import About from "./About/About";
import Features from "./Features/Features";
import LandingPage from "./LandingPage/LandingPage";
import Links from "./LinksToBranchSection/Links";
import Contact from "./Contact/Contact";

function Home() {
  return (
    <div className="container">
      <h1>This is a Home Page</h1>
      <LandingPage />
      <About />
      <Features />
      <Links />
      <Contact />
    </div>
  );
}
export default Home;
