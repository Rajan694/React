import Welcome from "./Welcome";
import GreetMessage from "./GreetMessage";

function Greet() {
  return (
    <>
      <div className="d-flex">
        <Welcome />
        <GreetMessage name="Rajan" />
      </div>
    </>
  );
}

export default Greet;
