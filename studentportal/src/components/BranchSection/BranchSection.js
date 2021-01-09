import "./BranchSection.css";
import Landing from "./LandingSection/Landing";
import Resources from "./Resources/Resources";
import LinkedBlog from "./LinkedBlog/LinkedBlog";
import Calendar from "./Calendar/Calendar";
import CRDetails from "./CRDetails/CRDetails";

function BranchSection(props) {
  return (
    <div className="branchsection">
      <Landing name={props.name} />
      <Resources name={props.name}/>
      <LinkedBlog />
      <Calendar />
      <CRDetails />
    </div>
  );
}
export default BranchSection;
