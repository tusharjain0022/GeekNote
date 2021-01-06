import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck } from 'react-bootstrap';
import contact_logo from './svg_img/contact_logo.svg';

function Contact() {
  return (
    <div>
      <div style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #A0DCFF 100%)" }} className="remove_container">
        <div className="container head">
          <h2 className="text-center mb-3">
            <img src={contact_logo} alt="message_logo" className="mr-3 center" /> Contact Us
        </h2>
        </div>

        <CardDeck className="final_deck container mt-5 mb-5">
          <Card className="ml-3 mr-3" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #A0DCFF 100%)" }}>
            <Card.Body className="container card_contact">
              <div className="container">
                <Card.Title className="text-center font-weight-bold">
                  <h3 className="font-weight-bold">Contact Page Admins</h3>
                </Card.Title>
                <hr />
                <Card.Text className="mt-4">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
              </Card.Text>
                <hr />
                <button className="button_contact">Contact Info</button>
              </div>
            </Card.Body>
          </Card>
          <Card className="ml-3 mr-3" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #A0DCFF 100%)" }}>
            <Card.Body className="container card_contact">
              <div className="container">
                <div className="text-center">
                  <Card.Title>
                    <h3 className="font-weight-bold">Contact Your CR</h3>
                  </Card.Title>
                  <p>(Class Representative)</p>
                </div>
                <hr />
                <Card.Text className="mt-4">
                  This card has supporting text below as a natural lead-in to additional
                content.{' '}
                </Card.Text>
                <hr />
                <button className="button_contact">Contact Info</button>
                <p className="text-center">lrep ipsum lorep ipsum </p>
              </div>
            </Card.Body>
          </Card>
          <Card className="ml-3 mr-3" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #A0DCFF 100%)" }}>
            <Card.Body className="container card_contact">
              <div className="container">
                <Card.Title className="text-center font-weight-bold">
                  <h3 className="font-weight-bold">Contact Page Developers</h3>
                </Card.Title>
                <hr />
                <Card.Text className="mt-4">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
              </Card.Text>
                <hr />
                <button className="button_contact">Contact Info</button>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>

        <div className="text-center">
          <p><button type="button" className="btn btn-link">Have any queries ? </button>We would love to hear from you </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
