import React from "react";
import "./About.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <div className="body">
    <Container className="mt-5 main">
      <Row>
        <Col md={8} className="mx-auto">
          <h2 className="text-center mb-4">Welcome to Our Room Booking Platform</h2>
          <p className="lead">
            At RoomHub, we are passionate about providing you with the best experience in finding and booking your perfect room.
          </p>
          <p>
            Whether you're planning a vacation, business trip, or a weekend getaway, RoomHub is here to make your stay memorable.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-center">Explore</Card.Title>
              <Card.Text>
                Discover a wide range of rooms suited for different preferences and budgets. Our extensive collection ensures you find the perfect accommodation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-center">Easy Booking</Card.Title>
              <Card.Text>
                Our user-friendly interface allows you to seamlessly browse, compare, and book rooms. Enjoy a hassle-free booking experience with RoomHub.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-center">Customer Satisfaction</Card.Title>
              <Card.Text>
                Your satisfaction is our priority. We strive to provide excellent customer service and ensure your needs are met throughout your stay.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export { About };
