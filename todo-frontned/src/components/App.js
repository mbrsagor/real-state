import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Todo from "../pages/Todo";
import AddTodo from "../pages/AddTodo";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/add-todo" component={AddTodo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
