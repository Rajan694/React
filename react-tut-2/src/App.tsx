import { useState } from "react";
import Welcome from "./components/Welcome";
import GreetMessage from "./components/GreetMessage";
import Button from "./components/Button";
function App() {
  const [name, setName] = useState("Rajan");

  const showAlert = () => {
    setName("Sandy");
    alert(`Alert from ${name}`);
  };
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <Welcome />
          <GreetMessage name={name} />
        </div>
        <Button text="Click Me!" onClick={showAlert}></Button>
      </div>
    </>
  );
}

export default App;
