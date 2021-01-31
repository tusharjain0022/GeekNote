import React, {useState, useEffect} from 'react'; 
import "./BranchSection.css";
import { useParams } from 'react-router-dom';
import data from '../../data/branches.json';

import Landing from "./LandingSection/Landing";
import LinkedBlog from "./LinkedBlog/LinkedBlog";
import Calendar from "./Calendar/Calendar";
import CRDetails from "./CRDetails/CRDetails";


function BranchSection() {
  const [branch, setBranch] = useState('Wev dev');
  const [intro, setIntro] = useState('This is default intro');
  const {link} = useParams();

  useEffect(() => {
      const newBranch = data.find((branch) => branch.link === link);
      setBranch(newBranch.dep);
      setIntro(newBranch.intro);
  }, [link]);
  return (
    <div className="branchsection">
      <Landing name={branch} intro={intro}/>
      <LinkedBlog name={branch} />
      <Calendar />
      <CRDetails />
    </div>
  );
}
export default BranchSection;
