import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router as BrowserRouter, Route, hashHistory } from "react-router";

import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";

const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider client={client}>
    <BrowserRouter history={hashHistory}>
      <div className="container">
        <Route path="/" exact component={SongList} />
        <Route path="/songs/new" component={SongCreate} />
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
