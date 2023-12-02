import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    GetLocalCounter();
    console.log(localStorage);
  }, []);

  const GetLocalCounter = () => {
    const contadorLocasl = parseInt(localStorage.getItem("item"));
    setCounter(contadorLocasl);
  };
  setTimeout(() => {
    if (counter >= 0) {
      localStorage.setItem("item", counter + 1);
    }
  }, 500);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem(key, value);
            setKey("");
            setValue("");
          }}
        >
          <h1>Key</h1>
          <input
            type="text"
            placeholder="Key a cambiar"
            onChange={({ target: { value } }) => setKey(value)}
            value={key}
          />
          <h2>nuevo Valor</h2>
          <input
            type="text"
            placeholder="Nuevo Valor"
            onChange={({ target: { value } }) => setValue(value)}
            value={value}
          />
          <button>Click</button>
        </form>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button
        onClick={() => {
          localStorage.setItem("item", 1);
        }}
      >
        Reset Counter Local
      </button>
    </>
  );
}

export default App;
