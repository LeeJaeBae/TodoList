import React, { Component } from "react";
import PageTemplate from "./PageTemplate/Index";
import TodoInput from "./TodoInput/Index";
import TodoList from "./TodoList/Index";

class App extends Component {
  state = {
    input: "",
    // Initail value
    todos: [
      { id: 0, text: "완료된 일정입니다.", done: true },
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

  //Toggle todo item
  handleToggle = id => {
    //Find index with id
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    //Reverse 'done' of the data
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };
    // Use 'slice' for copy before and after data of index
    // and insert changed todo object between them
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  };

  //Remove todo item
  handleRemove = id => {
    //Find index with id
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // Use 'slice' for copy before and after data of index
    // and stick them without index
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    console.log(todos);
    return (
      <PageTemplate>
        <TodoInput
          onChange={handleChange}
          onInsert={handleInsert}
          value={input}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </PageTemplate>
    );
  }
}

export default App;
