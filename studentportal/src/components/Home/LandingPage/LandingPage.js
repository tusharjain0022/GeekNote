import "./LandingPage.css";
import landing from "../../../images/LandingPage/landing.png";
import mlanding from "../../../images/LandingPage/mob-landing.png";
// import SlackButton from "./slackButton";

function LandingPage() {
  return (
    <div>
      {/* <SlackButton /> */}

      <div className="landing_page d-none d-md-block">
        <div className="text-intro">
          <div className="text-box align-middle">
            <h1 className="main-head">
              Bring everyone <br />
              on board.
            </h1>
            <p className="small-head">
              <span>
                Organised Notes and Study Material at one place. Separate
                discussion and blog Space, Year-wise and Branch-wise seperated
                space.
              </span>
            </p>
            <button type="button " className="btn explore-button">
              Explore
            </button>
          </div>
        </div>
        <div className="pic-div">
          <img src={landing} className="pic" alt="default landing page"/>
        </div>
      </div>
      <div className="d-md-none m-landing">
        <div className="mob-pic-div">
          <img src={mlanding} className="pic" alt="default landing page"/>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
