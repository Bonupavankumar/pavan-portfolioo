import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center align-self-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:pavankumarbonu1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="pavankumarbonu1@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.instagram.com/pavanram563/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my Instagram">
                  <i className="fab fa-Instagram in"></i> Instagram
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/Bonupavankumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://twitter.com/bonu_pavankumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info" title="Tweets are welcomed!">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.facebook.com/pavan.ram.5030"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;