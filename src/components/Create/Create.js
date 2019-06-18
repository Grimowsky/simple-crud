import React from "react";
import "./Create.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      open: false
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
    this.handleClose();
  };

  render() {
    return (
      <>
        <div
          onClick={this.handleClickOpen}
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
          <FontAwesomeIcon icon="plus" size="3x" />{" "}
          <span style={{ textAlign: "center" }}>Insert Values</span>
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Insert values to database
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Insert Values</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="value"
              label="value"
              fullWidth
              onChange={this.onInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onInsert} color="primary">
              Insert
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default Create;

{
  /*
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
        <FontAwesomeIcon icon="plus" size="3x" />{" "}
        <span style={{ textAlign: "center" }}>Insert Values</span>
      </div>
    );
  }
}

export default Create;
*/
}
