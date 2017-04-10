import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/app";
import PostsIndex from "./components/posts-index";
import PostsNew from "./components/posts-new";
import PostsShow from "./components/posts-show"

const Greeting = () => {
  return (
    <div>Hello!</div>
  );
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="/posts/new" component={PostsNew} />
    <Route path="/posts/:id" component={PostsShow} />
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="hello" component={Greeting} />
  </Route>
);
