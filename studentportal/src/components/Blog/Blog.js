import "./Blog.css";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel_modified from "./CarouselModified";
import Carousel_data from "../../data/carouselData.json"
import first_image from './images/1st.jpg';
import second_image from './images/2nd.jpg';
import third_image from './images/3rd.jpg';

function Blog() {
  return (
    <>
        <Carousel_modified data={Carousel_data}/>
    </>

    
);
  
=======
import Carousal from "./Carousal/Carousal";
import AdminBlog from "./Admin/Admin";
import SearchStats from "./SearchAndStats/SearchStats";
import CRBlog from "./CR/CR";
import StudentBlog from "./Students/Student";
import BlogFooter from "./BlogFooter/BlogFooter";

function Blog() {
	return (
		<div className="blog">
			<Carousal />
			<AdminBlog />
			<SearchStats />
			<CRBlog />
			<StudentBlog />
			<BlogFooter />
		</div>
	);
>>>>>>> 19aee1d3bcfd8491ddb95b5ab4174a73889c1eaa
}
export default Blog;
