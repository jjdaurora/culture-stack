//Dependencies
import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import User from "./Components/User";
import NotFoundPage from './pages/NotFoundPage';
import { Container } from "semantic-ui-react";
import { withUser, update } from './services/withUser';

class App extends Component {
  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios.get('/api/auth')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    return <div>
        <Nav />
        <Container className={"content"}>
          <Router>
            <Switch>
              <Route exact path="/create" component={CreatePost} />
              <Route exact path="/" component={Home} />
              <Route exact path="/my-profile" component={User} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </Container>
      </div>;
  }
}

export default withUser(App);
