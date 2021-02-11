import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from '../utils/PrivateRoute';

import Todo from "../pages/Todo";
import AddTodo from "../pages/AddTodo";
import TodoDetail from "../pages/TodoDetail";
import Header from "./Header";
import UpdateTodo from '../components/UpdateTodo';
import LoginView from '../pages/LoginView';
import RegisterView from '../pages/RegisterView';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Todo} />
        <Route exact path="/add-todo" component={AddTodo} />
        <Route exact path="/todo-update/:id" component={UpdateTodo} />
        <Route exact path="/todo-details/:id" component={TodoDetail} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/registration" component={RegisterView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
