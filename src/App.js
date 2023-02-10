import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Screens/Home";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
