import "./Admin.css";
import { Accordion, Card } from "react-bootstrap";
import clock from "./svg_img/clock.svg";
import Upvote from "./svg_img/upvote.svg";
import Downvote from "./svg_img/downvote.svg";
import { useState } from "react";
import tag_details from "../../../data/tag_details.json";

const CardofAdminBlock = ({
  title,
  author,
  posting_date,
  brief_info,
  tags,
  upvote,
  downvote,
}) => {
  var color_code = {};
  for (var i = 0; i < tag_details.length; i++)
    color_code[tag_details[i].tag] = tag_details[i].color;

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
              <img
                className="Upvote_admin"
                src={Upvote}
                onClick={(e) => {
                  set_initial(initial + 1);
                  e.stopPropagation();
                }}
                alt="upvote logo"
              ></img>
              <h1
                style={{
                  fontFamily: "Robot Slab",
                  fontSize: "20px",
                  marginLeft: "-15px",
                }}
              >
                {initial}
              </h1>
              <h1
                style={{
                  fontFamily: "Robot Slab",
                  fontSize: "20px",
                  marginLeft: "-15px",
                }}
              >
                {final}
              </h1>
              <img
                className="downvote_admin"
                src={Downvote}
                onClick={(e) => {
                  set_final(final + 1);
                  e.stopPropagation();
                }}
                alt="downvote logo"
              />
            </div>
            <div>
              <h4 style={{ fontFamily: "Robot Slab" }}>Blog Title - {title}</h4>

              {/* render tag's here */}
              <div className="for_tags_admin">
                {tags.map((tag_name) => {
                  return (
                    <p
                      className="render_tag_admin"
                      style={{ border: `1.5px solid ${color_code[tag_name]}` }}
                    >
                      {tag_name}
                    </p>
                  );
                })}
              </div>

              <div className="row end_of_card_admin">
                <p
                  style={{ fontFamily: "Robot Slab", fontSize: "12px" }}
                  className="bold col-sm"
                >
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

module.exports = CardofAdminBlock;
