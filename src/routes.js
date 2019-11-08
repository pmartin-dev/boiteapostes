import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import PostList from "./containers/post-list";
import PostForm from "./containers/post-form";
import { createBrowserHistory } from "history";
import Post from "./containers/post";
import NotFound from "./components/not-found";

const history = createBrowserHistory();

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/create-post" component={PostForm} />
            <Route exact path="/post/:id" component={Post} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
