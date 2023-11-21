import { useState } from "react";
import Welcome from "./components/Welcome";
import GreetMessage from "./components/GreetMessage";
import Button from "./components/Button";
import Form from "./components/Form";
import Style from "./components/Style";
import LoopComponent from "./components/LoopComponent";
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
        <hr />
        <Form />
        <hr />
        <Style />
        <hr />
        <LoopComponent />
      </div>
    </>
  );
}

export default App;
