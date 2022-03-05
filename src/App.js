import React from "react";
import { Toaster } from "react-hot-toast";

//? components
import { Header, TodoList } from "./components";

const App = () => {
  return (
    <div className='container'>
      <h1>Redux Todo App</h1>
      <Header />
      <TodoList />
      <Toaster
        position='bottom-right'
        toastOptions={{ style: { fontSize: "1.2rem" } }}
      ></Toaster>
    </div>
  );
};

export default App;
