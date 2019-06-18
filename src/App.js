import React, { Component } from "react";
import "./App.css";
import Create from "./components/Create/Create";
import Read from "./components/Read/Read";
import Update from "./components/Update/Update";
import Delete from "./components/Delete/Delete";
import Cards from "./components/Card/Cards";
import CardList from "./components/CardList/CardList";
import CardCollapse from "./components/CardCollapse/CardCollapse";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faAngleDoubleDown,
  faPlus,
  faTrash,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faKey, faAngleDoubleDown, faPlus, faTrash, faEdit);

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
    console.log(this.state.db);
  };

  updateList = id => {
    let data = this.state.db.filter(entry => {
      return !entry.id.includes(id);
    });
    this.setState({ db: data });
  };

  render() {
    return (
      <>
        <header> </header>
        <main>
          <div className="aside">
            <Read loadList={this.loadList} />
            <Create />
          </div>
          <section className="">
            <CardList values={this.state.db} updateList={this.updateList} />
          </section>
        </main>
        <footer> ABOUT </footer>
      </>
    );
  }
}
export default App;

/*<Create loadList={this.loadList} />
<Read loadList={this.loadList} />
<Update
  onInputChange={this.onInputChange}
  onButtonSubmit={this.onButtonSubmit}
/>
<CardList values={this.state.db} updateList={this.updateList} /> */
