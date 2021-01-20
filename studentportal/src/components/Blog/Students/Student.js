import "./Student.css";
import { Accordion, Card } from "react-bootstrap";
import blog_data from "../../../data/blog_data.json";
import clock from "./svg_img/clock.svg";
import left_arrow from "./svg_img/left_arrow.svg";
import right_arrow from "./svg_img/right_arrow.svg";
import { useState } from "react";
import graph_design from "./svg_img/graph_design.svg";

const CardofStudentblog = ({
  title,
  intro_para,
  author,
  posting_date,
  brief_info,
  tags,
}) => {
  return (
    <Accordion className="main_compo_card" defaultActiveKey="1">
      <Card className="render_card">
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="text-light chage_rad"
          style={{ backgroundColor: "#293C5A" }}
        >
          <h4 style={{ fontFamily: "Robot Slab" }}>Blog Title - {title}</h4>

          {/* render tag's here */}
          <div className="for_tags">
            return <p className="render_tag">{tags}</p>
            {tags.map((tag_name) => {
              return <p className="render_tag">{tag_name}</p>;
            })}
          </div>

          <p style={{ fontFamily: "Robot Slab", fontSize: "16px" }}>
            {intro_para}
          </p>

          <div className="row end_of_card">
            <p
              style={{ fontFamily: "Robot Slab", fontSize: "14px" }}
              className="bold col-sm"
            >
              BY: {author}
            </p>
            <p
              style={{ fontFamily: "Robot Slab", fontSize: "14px" }}
              className="posted_date col-sm"
            >
              <img className="clock_logo" src={clock} alt="clock logo" />
              Posted at: {posting_date}
            </p>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body style={{ backgroundColor: "#ECECEC" }}>
            <p style={{ fontFamily: "Robot Slab" }}>{brief_info}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

function StudentBlog(props_tag_name) {
  var blogs_to_show = [];
  for (var i = 0; i < blog_data.length; i++) {
    if (blog_data[i].by_student === true) {
      var ele;
      for (ele of blog_data[i].tags)
        if (ele === props_tag_name.tag) blogs_to_show.push(blog_data[i]);
    }
  }

  var but_arr = [];
  for (var j = 0; j < blogs_to_show.length / 4; j++) but_arr.push(j + 1);

  const total_blogs = blogs_to_show.length;
  const [start, set_start] = useState(0);
  const [end, set_end] = useState(3);

  return (
    <div className="row">
      <div className="col-md-11 col-xs-12 col-sm-12 mx-auto  ">
        <div className="Student_blog block">
          <div className="heading_and_button">
            <h3
              className="heading"
              style={{ fontFamily: "Robot Slab", color: "#CCD6F6" }}
            >
              By TechGeeks
              <img className="head_logo" src={graph_design} alt="logo" />
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

          {blogs_to_show.map((blog_info, iteration_number) => {
            if (iteration_number >= start && iteration_number <= end) {
              return <CardofStudentblog key={blog_info.id} {...blog_info} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default StudentBlog;
