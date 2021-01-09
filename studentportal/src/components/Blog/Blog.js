import "./Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselModified from "./CarouselModified";
import Carousel_data from "../../data/carouselData.json";
import AdminBlog from "./Admin/Admin";
import SearchStats from "./SearchAndStats/SearchStats";
import CRBlog from "./CR/CR";
import StudentBlog from "./Students/Student";
import BlogFooter from "./BlogFooter/BlogFooter";

function Blog() {
  return (
    <div className="blog">
      <CarouselModified data={Carousel_data} />
      <SearchStats />
      <AdminBlog />
      <CRBlog />
      <StudentBlog />
      <BlogFooter />
    </div>
  );
}
export default Blog;
