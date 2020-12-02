import React from "react";
import "./App.css";
import { Image } from "semantic-ui-react";
import { Home } from "./components/home";
import { Post } from "./components/post";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <div className="app-banner">
        <div className="inline-flex">
          <span>
            Powered by{" "}
            <a href="https://slash.dgraph.io" target="__blank">
              <strong>Slash GraphQL</strong>
            </a>
          </span>
          <Image size="mini" src="/lighting.svg" className="lightning-logo" />
        </div>
      </div>
      <div className="App">
        <div className="mt-4 mx-8">
          <p>
            Learn about building GraphQL apps with Slash GraphQL at
            https://dgraph.io/learn
          </p>
          <BrowserRouter>
            <Switch>
              <Route exact path="/post/:id" component={Post} />
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}
