import React, { Component } from "react";
import PageTemplate from "./PageTemplate/Index";
import TodoInput from "./TodoInput/Index";
import TodoList from "./TodoList/Index";

class App extends Component {
  state = {
    input: "",
    // 일정 데이터 초기값
    todos: [
      { id: 0, text: "취소된 일정입니다.", done: true },
      { id: 1, text: "예시 일정입니다.", done: false }
    ]
  };
  //todo data id process
  id = 1;
  getId = () => ++this.id;

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };
  //Insert New data
  handleInsert = () => {
    const { todos, input } = this.state;

    // make new data object
    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    };
    // put the data in array
    this.setState({
      todos: [...todos, newTodo],
      input: ""
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert } = this;
    console.log(todos);
    return (
      <PageTemplate>
        <TodoInput
          onChange={handleChange}
          onInsert={handleInsert}
          value={input}
        />
        <TodoList todos={todos} />
      </PageTemplate>
    );
  }
}

export default App;
