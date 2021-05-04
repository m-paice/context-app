import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { useContextApp } from "./context/AppContext";

import "./styles.css";

function App() {
  const { name, handleSetName } = useContextApp();

  const [nameInput, setNameInput] = useState("");

  const submit = (event) => {
    event.preventDefault();

    handleSetName(nameInput);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="content-container">
        <form onSubmit={submit}>
          <h1> {name} </h1>
          <input
            placeholder="digite seu nome"
            onChange={(event) => setNameInput(event.target.value)}
          />
          <button type="submit"> trocar nome </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
