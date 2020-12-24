import "./Blog.css";
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
}
export default Blog;
