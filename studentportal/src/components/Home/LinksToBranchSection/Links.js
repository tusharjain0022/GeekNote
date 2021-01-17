import "./Links.css";
import branches from "../../../data/branches.json";
import hline from "../../../images/horline.svg";

const Branch = ({ year, dep, theory, prac, credits }) => {
  return (
    <div className="card resource-card">
      <div className="cardContent">
        <div>
          <h3 className="year">{year}</h3>
          <h2>{dep}</h2>
        </div>
        <ul className="academics list-style-none">
          <li>Theory Subjects: {theory}</li>
          <li>Practical Subjects: {prac}</li>
          <li>
            <a href="location" className="stretched-link">
              Credits: {credits}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
function Links() {
  return (
    <section className="resource-section container">
      <div className="row">
        <div className="hline">
          <img src={hline} alt="hline" className="hline-pic"></img>
        </div>
        <div className="col-12">
          <h1 className="heading">&#9679; &#160; Resources</h1>
        </div>
        <div className="col-12">
          <div className="allcards">
            <div className="cards">
              {branches.map((branch) => {
                return <Branch key={branch.id} {...branch} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Links;
