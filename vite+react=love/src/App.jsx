import React from "react";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [isOpen, SetIsOpen] = useState(false);
  const [ActiveItem, setActiveItem] = useState(null)

  function ToggleisOpen() {
    SetIsOpen(prev => !prev)
  }
  function handleMouseEnter(item) {
    setActiveItem(item)
  }
  function MouseLeave() {
    setActiveItem(null)
  }

  return (
    <>
      {isOpen ? <span className="cross" onClick={ToggleisOpen}>X</span > :
        <button onClick={ToggleisOpen}>Начать
        </button>}

      {isOpen &&
        <><h1>Vite + React ={count >= 3 ? "love" : ""}</h1>

          <div className="logo-container">
            <img onMouseEnter={() => handleMouseEnter("vite")} onMouseLeave={() => MouseLeave(0)}
              src="./vite.svg" className={ActiveItem == "vite" || count >= 1 ? "logo active" : "logo"} alt="" />
            <p>+</p>
            <img onMouseEnter={() => handleMouseEnter("react")} onMouseLeave={() => MouseLeave(0)}
              src="./react.svg" className={ActiveItem == "react" || count >= 2 ? "logo active" : "logo"} alt="" />
            <p>=</p>
            <img onMouseEnter={() => handleMouseEnter("love")} onMouseLeave={() => MouseLeave(0)}
              src="./love.svg" className={ActiveItem == "love" || count >= 3 ? "logo active" : "logo"} alt="" />
          </div >
          <hr />
          <div className="card">
            <p className="count-paragraph">count is {count}</p>
            <div className="increment-buttons">
              <button onClick={() => setCount((prev) => (prev) + 1)}>+1</button>
              <button onClick={() => setCount((prev) => (prev) - 1)}>-1</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default App;
