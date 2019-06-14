import React from "react";
import "./Create.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onInsert = () => {
    fetch("http://localhost:3001/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div className="form-container">
        <InputGroup className="mb-3">
          <FormControl
            aria-describedby="basic-addon1"
            placeholder="Insert values to database"
            onChange={this.onInputChange}
          />
          <InputGroup.Prepend>
            <Button
              className="buttonWidth"
              variant="outline-secondary"
              onClick={this.onInsert}
            >
              INSERT
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    );
  }
}

export default Create;
