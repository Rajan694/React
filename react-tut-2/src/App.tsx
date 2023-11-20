import Welcome from "./components/Welcome";
import GreetMessage from "./components/GreetMessage";
import Button from "./components/Button";
function App() {
  const name = "Rajan";
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <Welcome />
          <GreetMessage name={name} />
        </div>
        <Button
          text="Click Me!"
          onClick={() => alert(`Alert by ${name}`)}
        ></Button>
      </div>
    </>
  );
}

export default App;
