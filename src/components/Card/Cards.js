import React from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const Cards = ({ id, value }) => {
  return (
    <Card style={{ width: "10rem" }} className="card">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
