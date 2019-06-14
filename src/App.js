import React, { Component } from "react";
import "./App.css";
import Create from "./components/Create/Create";
import Read from "./components/Read/Read";
import Update from "./components/Update/Update";
import Delete from "./components/Delete/Delete";
import Cards from "./components/Card/Cards";
import CardList from "./components/CardList/CardList";
import CardCollapse from "./components/CardCollapse/CardCollapse";

const initialState = {
  input: "",
  db: []
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadList = data => {
    this.setState({ db: data });
  };

  updateList = id => {
    let data = this.state.db.filter(entry => {
      return !entry.id.includes(id);
    });
    this.setState({ db: data });
  };

  render() {
    return (
      <div>
        <Create loadList={this.loadList} />
        <Read loadList={this.loadList} />
        <Update
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <CardList values={this.state.db} updateList={this.updateList} />
      </div>
    );
  }
}
export default App;
