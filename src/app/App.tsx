import React from "react";
import "./App.css";
import DsmView from "modules/dsm/DsmView";
import UserView from "modules/user/UserView";

function App() {
  return (
    <div className="App">
      <DsmView />
      <UserView />
    </div>
  );
}

export default App;
