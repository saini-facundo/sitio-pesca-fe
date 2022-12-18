import { useState } from "react";
import "./App.css";
import { BottomNav } from "./components/BottomNav.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="content"></div>
      <BottomNav />
    </div>
  );
}

export default App;
