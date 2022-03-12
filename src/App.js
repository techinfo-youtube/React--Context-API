import React, { useState } from "react";
import "./App.css";
import { PostProvider } from "./context/PostContext";
import HomePage from "./Pages/HomePage";

function App() {
  // const [posts, setPosts] = useState([
  //   { id: 1, title: "post One" },
  //   { id: 2, title: "post Two" },
  //   { id: 3, title: "post Three" },
  //   { id: 4, title: "post Four" },
  // ]);
  return (
    <PostProvider>
      <div className="App">
        <h1>Navabr section</h1>
        <HomePage />
        <h1>Footer Section</h1>
      </div>
    </PostProvider>
  );
}

export default App;
