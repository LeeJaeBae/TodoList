import React, { Component } from "react";
import PageTemplate from "./PageTemplate/Index";
import TodoInput from "./TodoInput/Index";
import TodoList from "./TodoList/Index";

class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInput />
        <TodoList />
      </PageTemplate>
    );
  }
}

export default App;
