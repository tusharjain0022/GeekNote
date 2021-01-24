import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import contact_logo from "./svg_img/contact_logo.svg";

function Contact() {
  return (
    <div className="contactus-section container mb-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-3">
            <img
              src={contact_logo}
              alt="contact_logo"
              className="mr-3 center"
              style={{ width: "35px" }}
            />{" "}
            Contact Us
            <hr
              style={{ borderTop: "1px solid  #ccd6f6", width: "46.875vw" }}
            ></hr>
          </h2>
        </div>
        <div className="col-12 col-md-6">
          <Card className=" page-admin">
            <Card.Body className="container card_contact">
              <div className="container">
                <Card.Title className="text-center ">
                  <h3>
                    Contact Page <br></br>Admins
                  </h3>
                </Card.Title>
                <hr style={{ borderTop: "1px solid white" }} />
                <Card.Text className="mt-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <hr style={{ borderTop: "1px solid white" }} />
                <button type="button " className="btn button_contact">
                  Contact Info
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-6">
          <Card className=" developer">
            <Card.Body className="container card_contact">
              <div className="container">
                <Card.Title className="text-center ">
                  <h3>Contact Page Developers</h3>
                </Card.Title>
                <hr style={{ borderTop: "1px solid white" }} />
                <Card.Text className="mt-4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                <hr style={{ borderTop: "1px solid white" }} />
                <button type="button " className="btn button_contact">
                  Contact Info
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12">
          <div className="text-center text-white">
            <p>
              <a href="/">Have any queries or suggestions ? </a>
              We would love to hear from you{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
