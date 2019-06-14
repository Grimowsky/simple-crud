import React from "react";
import "./Read.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Read extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onInsert = () => {
    fetch("http://localhost:3001/", {
      method: "get"
    })
      .then(response => response.json())
      .then(data => {
        this.props.loadList(data);
      });
  };

  render() {
    return (
      <div className="form-container">
        <InputGroup className="mb-3">
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="Get values from database"
          />
          <InputGroup.Prepend>
            <Button
              className="buttonWidth"
              variant="outline-secondary"
              onClick={this.onInsert}
            >
              GET
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    );
  }
}

export default Read;
