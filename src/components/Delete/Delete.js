import React from "react";
import "./Delete.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardID: ""
    };
  }

  onButtonSubmit = event => {
    const { id } = event.target;
    this.setState(
      {
        cardID: id
      },
      function() {
        fetch("http://localhost:3001/delete", {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cardID: id
          })
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .then(this.props.updateList(id));
      }
    );
  };

  render() {
    const { id } = this.props.id;
    return (
      <div>
        {/*<InputGroup className="mb-3">
          <FormControl
            placeholder="Delete from db"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={this.onInputChange}
          />
          <InputGroup.Append>
          */}
        <Button
          id={this.props.id}
          className="button"
          variant="outline-secondary"
          onClick={this.onButtonSubmit}
        >
          Delete
        </Button>
        {/*</InputGroup.Append>
        </InputGroup>*/}
      </div>
    );
  }
}

export default Delete;
