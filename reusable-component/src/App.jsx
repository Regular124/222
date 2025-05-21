import { useState } from "react";
import Header from "./components/Header.JSX";
import "./index.css";
import Instructions from "./components/instructions";
import Main from "./components/Main";
import Footer from "./components/footer";
import Button from "./components/Button";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  function handleClick(){
    alert("click")
  } 

  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions} />
      <Instructions showInstructions={showInstructions} toggleInstructions={toggleInstructions} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
