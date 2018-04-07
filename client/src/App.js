import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UploadForm from "./pages/UploadForm";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import User from "./Components/User";


class App extends Component {
  render() {
    return (
      <div>
      <Nav/>
        <Router>
          <Switch>
            <Route exact path="/upload" component={UploadForm} />
            <Route exact path="/create" component={CreatePost} />
            <Route exact path="/" component={Home} />
            <Route exact path="/my-profile" component={User}/>
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
