import React from "react";
import "./Contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <Container className="mt-5 main">
      <Row>
        <Col md={8} className="mx-auto">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="lead fw-bold">
            Have questions or need assistance? Feel free to reach out to us. We're here to help!
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
            </Form.Group>

            <Button variant="primary" type="submit" className="button d-flex justify-content-center">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6} className="mx-auto text-center">
          <h4>Contact Details</h4>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <a href="mailto:sharanyagovindaraj05@gmail.com" className="text-dark h6">sharanyagovindaraj05@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <span>9360564287</span>
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={8} className="mx-auto text-center">
          <footer>
            <p className="fw-bolder">&copy; 2024 React Projects - All rights reserved</p>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}

export { Contact };