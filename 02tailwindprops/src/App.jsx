import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black  rounded-xl h-[30px] w-[200px] ">
        Tailwind Test
      </h1>
      <Card />
    </>
  );
}

export default App;
