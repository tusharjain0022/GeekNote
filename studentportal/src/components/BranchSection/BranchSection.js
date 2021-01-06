import "./BranchSection.css";
import Landing from "./LandingSection/Landing";
import Resources from "./Resources/Resources";
import LinkedBlog from "./LinkedBlog/LinkedBlog";
import Calendar from "./Calendar/Calendar";
import CRDetails from "./CRDetails/CRDetails";

function BranchSection(props) {
	return (
		<div className="branchsection">
			<h1>This is a {props.name} BranchSection Page</h1>
			<Landing />
			<Resources />
			<LinkedBlog />
			<Calendar />
			<CRDetails />
			
		</div>
	);
}
export default BranchSection;
