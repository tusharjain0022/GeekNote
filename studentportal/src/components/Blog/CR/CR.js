import "./CR.css";
import { Accordion, Card } from "react-bootstrap";
import cr_blog_data from "../../../data/CRData.json";
import clock from "./svg_img/clock.svg";
import left_arrow from "./svg_img/left_arrow.svg";
import right_arrow from "./svg_img/right_arrow.svg";
import { useState } from "react";
import vector from "./svg_img/Vector.svg";

const CardOfCrBlog = ({
  title,
  intro_para,
  author,
  posting_date,
  brief_info,
}) => {
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
              {" "}
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

var but_arr = [];
for (var i = 0; i < cr_blog_data.length / 4; i++) but_arr.push(i + 1);

function CRBlog() {
  const total_blogs = cr_blog_data.length;
  const [initial_state, set_initial_state] = useState(total_blogs);
  const [final_state, set_final_state] = useState(total_blogs - 3);

  return (
    <div className="Cr_blog container block ">
      <div className="heading_and_button">
        <h1 className="heading" style={{ fontFamily: "Robot Slab" }}>
          {" "}
          By Class Representative{" "}
          <img style={{ marginLeft: "5px" }} src={vector} alt="logo" />
        </h1>
        {/* Buttons Block */}
        <div
          className="heading"
          style={{ marginBottom: "10px", marginTop: "10px" }}
        >
          <button
            type="submit"
            onClick={() => {
              if (initial_state !== total_blogs) {
                set_initial_state(initial_state + 4);
                set_final_state(final_state + 4);
              }
            }}
          >
            <img src={left_arrow} alt="left" />
          </button>
          {but_arr.map((but_number) => {
            return (
              <button
                type="submit"
                onClick={() => {
                  set_initial_state(total_blogs - 4 * (but_number - 1));
                  set_final_state(total_blogs - 4 * (but_number - 1) - 3);
                }}
              >
                {but_number}
              </button>
            );
          })}
          <button
            type="submit"
            onClick={() => {
              if (final_state > 1) {
                set_initial_state(initial_state - 4);
                set_final_state(final_state - 4);
              }
            }}
          >
            <img src={right_arrow} alt="right" />
          </button>
        </div>
      </div>

      {/* Rendering blog's here */}
      {cr_blog_data.map((blog_info) => {
        if (blog_info.id >= final_state && blog_info.id <= initial_state) {
          return <CardOfCrBlog key={blog_info.id} {...blog_info} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}
export default CRBlog;
