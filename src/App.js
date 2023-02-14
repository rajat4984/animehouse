import "./App.css";
import Navbar from "./components/Navbar";
import * as React from "react";
import ListContainer from "components/ListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ListContainer/>
    </div>
  );
}

export default App;
