import "./Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselModified from "./CarouselModified";
import Carousel_data from "../../data/carouselData.json";
import AdminBlog from "./Admin/Admin";
import SearchStats from "./SearchAndStats/SearchStats";
import StudentBlog from "./Students/Student";
import BlogFooter from "./BlogFooter/BlogFooter";

function Blog() {
  return (
    <div className="blog">
      <CarouselModified data={Carousel_data} />
      <div className="row">
        <div className="col-8 d-none d-xl-block admin_container">
          <div className="col-12 styleAdmin">
            <AdminBlog tag={"all"} />
          </div>
        </div>
        <div className="col-4 d-none d-xl-block search_stats">
          <div className="styleSearch">
            <SearchStats />
          </div>
        </div>
      </div>
      <div className="mobileContainer">
        <div className=" col-12 d-xl-none row">
          <SearchStats />
        </div>
        <div className="col-12 d-xl-none row">
          <AdminBlog tag={"all"} />
        </div>
      </div>
      <StudentBlog tag={"all"} />
      <BlogFooter />
    </div>
  );
}
export default Blog;
