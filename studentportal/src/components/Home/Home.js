import "./Home.css";
import About from "./About/About";
import Features from "./Features/Features";
import LandingPage from "./LandingPage/LandingPage";
import Links from "./LinksToBranchSection/Links";
import Contact from "./Contact/Contact";

function Home() {
  return (
    <div className="container home">
      <LandingPage />
      <About />
      <Features />
      <Links />
      <Contact />
    </div>
  );
}
export default Home;
