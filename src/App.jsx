/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function TaskForm({ setTasks }) {
  const [task, setTask] = useState("");
  function handleClick() {
    console.log("hello");
    setTasks((prev) => {
      return [
        {
          id: prev.length,
          title: task,
          isChecked: false,
        },
        ...prev,
      ];
    });
    setTask("");
  }
  return (
    <div className="p-2 text-center">
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        className="outline-none bg-gray-700 rounded-l-md py-1 px-3 w-30"
        placeholder="Enter the name "
      />
      <button
        className="px-3 py-1 bg-gray-500 rounded-r-md text-black"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}

function MyFooter() {
  return (
    <footer className="text-center text-gray-400">
      &copy; Swarup Deepak Vishwas <span className="italic">2023</span>
    </footer>
  );
}

function NoTasks() {
  return <div className="text-center">No Tasks Remaining...</div>;
}

function Navbar() {
  return (
    <nav className="p-3 flex items-center justify-between">
      <h1 className="text-2xl uppercase ">Todo List</h1>
      <div className="link">
        <a href="" className="underline">
          Repo Link
        </a>
      </div>
    </nav>
  );
}

function TasksArena({ tasks }) {
  const taskDivs = tasks.map((el) => {
    return (
      <div key={el.id} className="px-3 py-2 text-lg ">
        <input
          type="checkbox"
          checked={el.isChecked}
          className="mx-2"
          name=""
          id="id"
        />
        <label htmlFor="id">{el.title}</label>
      </div>
    );
  });
  return (
    <div className="text-center flex flex-col justify-between gap-2 items-center">
      {taskDivs}
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="h-screen text-gray-200 font-mono bg-gray-900 flex flex-col justify-between">
      <Navbar />
      <div className="task-arena">
        <TaskForm setTasks={setTasks} />
        {tasks.length == 0 ? <NoTasks /> : <TasksArena tasks={tasks} />}
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
