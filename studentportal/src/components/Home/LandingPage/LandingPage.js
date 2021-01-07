import "./LandingPage.css";
import landing from "./landing.svg";
// import SlackButton from "./slackButton";

function LandingPage() {
  return (
    <div>
      {/* <SlackButton /> */}
      <div className="container l">
        <div className="row landing_page">
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
            <img src={landing} className="pic" alt="default landing page"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
