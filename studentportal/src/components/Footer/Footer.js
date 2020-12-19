import "./Footer.css";

function Footer() {
  return (
<<<<<<< HEAD
    <div>
      <h1>This is a Footer</h1>
    </div>
=======
      <div className="main-footer">
          <div className="container">
              <div className="row">
                  {/* Column1 */}
                  <div className="col-6 col-sm-4">
                      <div className="Option"><h4>Project 3001</h4></div>
                      <div className="Contents">
                          <ul className="list-unstyled">
                              <li>Copyright&copy;3001</li>
                              <li>All rights reserved</li>
                          </ul>
                      </div>
                      <div className="Links">
                          <a href ="/"><img src={instagram} alt="Instagram"></img></a>
                          <a href ='/'><img src={dribble} alt="Dribbble"></img></a>
                          <a href ="/"><img src={youtube} alt="Youtube"></img></a>
                          <a href ="/"><img src={twitter} alt="Twitter"></img></a>
                      </div>
                  </div>
                  {/*Column2*/}
                  <div className="col-6 col-sm-2">
                      <div className="Option"><h4>Links</h4></div>
                      <div className="Contents">
                          <ul className="list-unstyled">
                          <li><a href="/">About Us</a></li>
                          <li><a href="/">Blog</a></li>
                          <li><a href="/">Resources</a></li>
                          <li><a href="/">Home</a></li>
                          <li><a href="/">Calendar</a></li>
                      </ul>
                      </div>
                  </div>
                  {/*Column3*/}
                  <div className="col-4 col-sm-3">
                      <div className="Option"><h4>Support</h4></div>
                      <div className="Contents">
                      <ul className="list-unstyled">
                          <li><a href="/">Contact CR</a></li>
                          <li><a href="/">Contact Page admins</a></li>
                          <li><a href="/">Developers</a></li>
                          <li><a href="/">Terms and Policy</a></li>
                          <li><a href="/">Login/SignUp</a></li>
                      </ul>
                      </div>
                  </div>
                  {/*Column4*/}
                  <div className="col-8 col-sm-3">
                      <div className="sp"><h4>Stay Up to Date</h4></div>
                      <div className="sp-contents">
                          <Form>
                              <Form.Group controlId="formBasicEmail">
                                  <Form.Control type="email" placeholder="Enter email" />
                              </Form.Group>
                          </Form>
                      </div>
                      <div className="sp"><h4>Want to Contribute?</h4></div>
                      <div className="sp-contents">
                          <div className="text"><a href="https://github.com/tusharjain0022/3001">github.com/tusharjain0022/3001</a></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
>>>>>>> bb6ad15... Created Footer
  );
}
export default Footer;
