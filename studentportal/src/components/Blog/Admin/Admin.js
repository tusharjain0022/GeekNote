import "./Admin.css";
import { Accordion, Card } from "react-bootstrap";
import blog_data from "../../../data/blog_data.json";
import clock from "./svg_img/clock.svg";
import left_arrow from "./svg_img/left_arrow.svg";
import right_arrow from "./svg_img/right_arrow.svg";
import Upvote from "./svg_img/upvote.svg";
import Downvote from "./svg_img/downvote.svg";
import { useState } from "react";
import admin_logo from "./svg_img/admin_logo.svg";
import tag_details from "../../../data/tag_details.json";



const CardofAdminBlock = ({ title, author, posting_date, brief_info, tags, upvote, downvote }) => {

  var color_code = {};
  for(var i=0;i<tag_details.length;i++) color_code[tag_details[i].tag]=tag_details[i].color;

  const [initial, set_initial] = useState(upvote);
  const [final, set_final] = useState(downvote);

  return (
    <Accordion className="main_compo_card_admin" defaultActiveKey="1">
      <Card className="render_card_admin">
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="text-light chage_rad"
          style={{ backgroundColor: "#293C5A" }}
        >


          <div className="whole_admin">

            <div className="upvote_downvote">
              <img className="Upvote_admin" src={Upvote} onClick={(e) => { set_initial(initial + 1) }} alt="upvote logo"></img>
              <h1 style={{ fontFamily: "Robot Slab", fontSize: "20px", marginLeft: "-15px" }}>{initial}</h1>
              <h1 style={{ fontFamily: "Robot Slab", fontSize: "20px", marginLeft: "-15px" }}>{final}</h1>
              <img className="downvote_admin" src={Downvote} onClick={(e) => { set_final(final + 1) }} alt="downvote logo" />

            </div>
            <div>
              <h4 style={{ fontFamily: "Robot Slab" }}>Blog Title - {title}</h4>

              {/* render tag's here */}
              <div className="for_tags_admin">
                {tags.map((tag_name) => {
                  return <p className="render_tag_admin" style={{ border: `2px solid ${color_code[tag_name]}` }}>{tag_name}</p>;
                })}
              </div>

              <div className="row end_of_card_admin">
                <p style={{ fontFamily: "Robot Slab", fontSize: "12px" }} className="bold col-sm">
                  BY: {author}
                </p>
                <p
                  style={{ fontFamily: "Robot Slab", fontSize: "12px" }}
                  className="posted_date col-sm"
                >
                  <img className="clock_logo" src={clock} alt="clock logo" />
              Posted at: {posting_date}
                </p>
              </div>
            </div>
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

function AdminBlog(props_tag_name) {

  var blogs_to_show = [];
  for (var i = 0; i < blog_data.length; i++) {
    if (blog_data[i].by_admin === true) {
      var ele;
      for (ele of blog_data[i].tags)
        if (ele === props_tag_name.tag)
          blogs_to_show.push(blog_data[i]);

    }
  }

  var but_arr = [];
  for (var j = 0; j < blogs_to_show.length / 4; j++) but_arr.push(j + 1);

  const total_blogs = blogs_to_show.length;
  const [start, set_start] = useState(0);
  const [end, set_end] = useState(3);

  return (
    <div className="col-md-9 col-sm-11 Admin_blog block">
      <div className="heading_and_button_admin">
        <h3 className="heading" style={{ fontFamily: "Robot Slab", color: "#CCD6F6" }}>
          By Admin
            <img className="head_logo_admin" src={admin_logo} alt="logo" />
        </h3>
        {/* Buttons Block */}
        <div className="heading" style={{ marginBottom: "10px", marginTop: "10px" }}>
          <button style={{ background: "#293C5A", color: "#CCD6F6" }} type="submit" onClick={() => {
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
                <button style={{ background: "#293C5A", color: "#CCD6F6" }} type="submit" onClick={() => {
                  set_start(4 * (but_number - 1));
                  set_end(4 * (but_number - 1) + 3);
                }}>{but_number}</button>
              );
            })}
          <button style={{ background: "#293C5A", color: "#CCD6F6" }} type="submit" onClick={() => {
            if (end < total_blogs) {
              set_start(start + 4);
              set_end(end + 4);
            }
          }}>
            <img src={right_arrow} alt="right" /></button>
        </div>
      </div>

      <p style={{ color: 'greenyellow' }}>showing results for:- {props_tag_name.tag}</p>
      {blogs_to_show.length === 0 ? <p className="no_result_admin">NO RESULTS FOUND FOR :- "{props_tag_name.tag}"</p> : null}


      {
        blogs_to_show.map((blog_info, iteration_number) => {
          if (iteration_number >= start && iteration_number <= end) {
            return <CardofAdminBlock key={blog_info.id} {...blog_info} />;
          }
          else {
            return null;
          }
        })
      }
    </div>
  );
}
export default AdminBlog;