import "./Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselModified from "./CarouselModified";
import Carousel_data from "../../data/carouselData.json";
import AdminBlog from "./Admin/Admin";
import SearchStats from "./SearchAndStats/SearchStats";
import StudentBlog from "./Students/Student";
import BlogFooter from "./BlogFooter/BlogFooter";
import { useState } from 'react';

function Blog() {

  const [global_tag, set_global_tag] = useState('All');

  const transfer_data_tag = (new_tag) => {
    set_global_tag(new_tag);
  }

  return (
    <div className="blog">
      <CarouselModified data={Carousel_data} />
      <div className="row">
        <div className="col-8 d-none d-xl-block admin_container">
          <div className="col-12 styleAdmin">
            <AdminBlog tag={global_tag} />
          </div>
        </div>
        <div className="col-4 d-none d-xl-block search_stats">
          <div className="styleSearch">
            <SearchStats transfer_data_tag={transfer_data_tag} />
          </div>
        </div>
      </div>
      <div className="mobileContainer">
        <div className=" col-12 d-xl-none row">
          <SearchStats transfer_data_tag={transfer_data_tag} />
        </div>
        <div className="col-12 d-xl-none row">
          <AdminBlog tag={global_tag} />
        </div>
      </div>
      <StudentBlog tag={global_tag} />
      <BlogFooter />
    </div>
  );
}
export default Blog;
