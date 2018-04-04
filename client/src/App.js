import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UploadForm from "./pages/UploadForm";
import CreatePost from "./pages/CreatePost";
import Nav from "./Components/Nav/Nav"

class App extends Component {
  render() {
    return (
      <div>
      <Nav/>
        <Router>
          <Switch>
            <Route exact path="/upload" component={UploadForm} />
            <Route exact path="/create" component={CreatePost} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
