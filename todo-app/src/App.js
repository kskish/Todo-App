import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(
          todos.filter((todo) => {
            return todo.completed === true;
          })
        );
        break;
      case "uncompleted":
        setFilterTodos(
          todos.filter((todo) => {
            return todo.completed === false;
          })
        );
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
