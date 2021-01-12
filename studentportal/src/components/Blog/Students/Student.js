import "./Student.css";
import { Accordion, Card } from "react-bootstrap";
import blog_data from "../../../data/blog_data.json";
import clock from "./svg_img/clock.svg";
import left_arrow from "./svg_img/left_arrow.svg";
import right_arrow from "./svg_img/right_arrow.svg";
import { useState } from "react";
import graph_design from "./svg_img/graph_design.svg";

const CardofStudentblog = ({ title, intro_para, author, posting_date, brief_info, }) => {
  return (
    <Accordion className="main_compo_card" defaultActiveKey="1">
      <Card style={{ backgroundColor: "#FFFFFF" }}>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="text-dark chage_rad"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <h4 style={{ fontFamily: "Robot Slab" }}>Blog Title - {title}</h4>
          <p style={{ fontFamily: "Robot Slab" }}>{intro_para}</p>
          <div className="row">
            <p style={{ fontFamily: "Robot Slab" }} className="bold col-sm">
              By: {author}
            </p>
            <p
              style={{ fontFamily: "Robot Slab" }}
              className="posted_date col-sm"
            >
              <img className="clock_logo" src={clock} alt="clock logo" />
              Posted at: {posting_date}
            </p>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body style={{ backgroundColor: "gray" }}>
            <p style={{ fontFamily: "Robot Slab" }}>{brief_info}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};


var blogs_to_show = [];
for (var i = 0; i < blog_data.length; i++) {
  if (blog_data[i].by_student === true)
    blogs_to_show.push(blog_data[i]);
}

var but_arr = [];
for (var j = 0; j < blogs_to_show.length / 4; j++) but_arr.push(j + 1);


function StudentBlog() {
  const total_blogs = blogs_to_show.length;
  const [start, set_start] = useState(0);
  const [end, set_end] = useState(3);

  return (
    <div className="Student_blog container block">
      <div className="heading_and_button">
        <h1 className="heading" style={{ fontFamily: "Robot Slab" }}>
          By Student
          <img style={{ marginLeft: "5px" }} src={graph_design} alt="logo" />
        </h1>
        {/* Buttons Block */}
        <div className="heading" style={{ marginBottom: "10px", marginTop: "10px" }}>
          <button type="submit" onClick={() => {
            if (start > 0) {
              set_start(start - 4);
              set_end(end - 4);
            }
          }}>
            <img src={left_arrow} alt="left" />
          </button>
          {
            but_arr.map((but_number) => {
              return (
                <button type="submit" onClick={() => {
                  set_start(4 * (but_number - 1));
                  set_end(4 * (but_number - 1) + 3);
                }}>{but_number}</button>
              );
            })}
          <button type="submit" onClick={() => {
            if (end < total_blogs) {
              set_start(start + 4);
              set_end(end + 4);
            }
          }}>
            <img src={right_arrow} alt="right" /></button>
        </div>
      </div>

      {
        blogs_to_show.map((blog_info, iteration_number) => {
          if (iteration_number >= start && iteration_number <= end) {
            return <CardofStudentblog key={blog_info.id} {...blog_info} />;
          }
          else {
            return null;
          }
        })
      }
    </div>
  );
}
export default StudentBlog;