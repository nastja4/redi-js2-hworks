import { useState } from "react";
import "./styles.css";
import { Pokemon } from "./Pokemon";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  const [inputValue, setInputValue] = useState<number | "">(0);

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Pokemon card picker</h1>
        <input
          style={{ marginRight: "10px" }}
          type="number"
          value={inputValue}
          onChange={(e) => {
            const newValue = e.target.value;
            setInputValue(newValue === "" ? "" : Number(newValue));
          }}
        ></input>
        <Link to={inputValue.toString()}>Visit Pokemon</Link>

        <Routes>
          <Route path=":id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
