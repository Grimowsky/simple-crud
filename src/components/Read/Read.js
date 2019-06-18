import React from "react";
import "./Read.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Read extends React.Component {
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
      <div
        onClick={this.onInsert}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "16px",
          width: "100%",
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <FontAwesomeIcon icon="angle-double-down" size="3x" />{" "}
        <span style={{ textAlign: "center" }}>Get Values</span>
      </div>
    );
  }
}

export default Read;
