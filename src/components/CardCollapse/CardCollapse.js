import React, { Component } from "react";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cards from "../Card/Cards";
import Delete from "../Delete/Delete";

class CardCollapse extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isOpen: false
    };
  }

  onButtonSubmit = e => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { onButtonSubmit } = this.props;
    return (
      <Card
        style={{
          width: "10rem"
        }}
        className="card text-center"
        id={this.props.id}
      >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{this.props.id}</Card.Title>
          <Card.Text>{this.props.value}</Card.Text>
        </Card.Body>
        <Button
          onClick={this.onButtonSubmit}
          aria-controls="example-collapse-text"
          aria-expanded={isOpen}
        >
          More
        </Button>
        <Collapse in={this.state.isOpen}>
          <div id="example-collapse-text">
            <Delete id={this.props.id} updateList={this.props.updateList} />
          </div>
        </Collapse>
      </Card>
    );
  }
}

export default CardCollapse;
