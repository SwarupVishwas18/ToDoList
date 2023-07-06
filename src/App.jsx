import { useState } from "react";

import "./App.css";

function TaskForm() {
  return <div className="p-2">
    <input type="text" className="outline-none bg-gray-700 rounded p-1 w-30" placeholder="Enter the name " />
    <button className="px-3 py-1 bg-gray-700">Add</button>
  </div>;
}

function Navbar() {
  return (
    <nav className="p-3">
      <h1 className="text-2xl uppercase">Todo List</h1>
      <div className="link">
        <a href="" className="underline">
          Repo Link
        </a>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="h-screen text-gray-200 font-mono bg-gray-900">
      <Navbar />
      <TaskForm />
    </div>
  );
}

export default App;
