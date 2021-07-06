import "./Admin.css";
import left_arrow from "./svg_img/left_arrow.svg";
import right_arrow from "./svg_img/right_arrow.svg";
import { useState } from "react";
import admin_logo from "./svg_img/admin_logo.svg";
import { useEffect } from "react";
import axios from "axios";
import CardofAdminBlock from "./cardOfAdminBlock";
//testing live share

function AdminBlog(props_tag_name) {
  const propName = props_tag_name.tag.split(" ").join("%20");
  const [blogs_to_show, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/blogs/?tags=${propName}`)
      .then((response) => {
        setBlogs(response.data.data.blogs);

        // console.log(response.data.data.blogs);
      });
  }, [propName]);

  // console.log(blogs_to_show);

  var but_arr = [];
  for (var j = 0; j < blogs_to_show.length / 4; j++) but_arr.push(j + 1);

  const total_blogs = blogs_to_show.length;
  const [start, set_start] = useState(0);
  const [end, set_end] = useState(3);

  return (
    <div className="col-md-9 col-sm-11 Admin_blog block">
      <div className="heading_and_button_admin">
        <h3
          className="heading"
          style={{ fontFamily: "Robot Slab", color: "#CCD6F6" }}
        >
          By Admin
          <img className="head_logo_admin" src={admin_logo} alt="logo" />
        </h3>
        {/* Buttons Block */}
        <div
          className="heading"
          style={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <button
            style={{ background: "#293C5A", color: "#CCD6F6" }}
            type="submit"
            onClick={() => {
              if (start > 0) {
                set_start(start - 4);
                set_end(end - 4);
              }
            }}
          >
            <img src={left_arrow} alt="left" />
          </button>
          {but_arr.map((but_number) => {
            return (
              <button
                style={{ background: "#293C5A", color: "#CCD6F6" }}
                type="submit"
                onClick={() => {
                  set_start(4 * (but_number - 1));
                  set_end(4 * (but_number - 1) + 3);
                }}
              >
                {but_number}
              </button>
            );
          })}
          <button
            style={{ background: "#293C5A", color: "#CCD6F6" }}
            type="submit"
            onClick={() => {
              if (end < total_blogs) {
                set_start(start + 4);
                set_end(end + 4);
              }
            }}
          >
            <img src={right_arrow} alt="right" />
          </button>
        </div>
      </div>

      <p style={{ color: "greenyellow" }}>
        showing results for:- {props_tag_name.tag}
      </p>
      {blogs_to_show.length === 0 ? (
        <p className="no_result_admin">
          NO RESULTS FOUND FOR :- "{props_tag_name.tag}"
        </p>
      ) : null}

      {blogs_to_show.map((blog_info, iteration_number) => {
        if (iteration_number >= start && iteration_number <= end) {
          return <CardofAdminBlock key={blog_info.id} {...blog_info} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}
export default AdminBlog;
