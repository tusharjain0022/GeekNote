import "./BranchSection.css";
import Landing from "./LandingSection/Landing";
import LinkedBlog from "./LinkedBlog/LinkedBlog";
import Calendar from "./Calendar/Calendar";
import CRDetails from "./CRDetails/CRDetails";

function BranchSection(props) {
  return (
    <div className="branchsection">
      <Landing name={props.name} intro={props.intro}/>
      <LinkedBlog name={props.name} />
      <Calendar />
      <CRDetails />
    </div>
  );
}
export default BranchSection;
