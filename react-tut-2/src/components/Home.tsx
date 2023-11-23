import Child from "./Child";
import Button from "./Button";

function Home() {
  const showAlert = () => {
    alert(`Alert from Rajan`);
  };

  const getName = (name: string) => {
    alert(name);
  };
  return (
    <>
      <h1>Home</h1>
      <h4>Child</h4>
      <Child getData={getName} />
      <h4>Button</h4>

      <Button text="Click Me!" onClick={showAlert}></Button>
    </>
  );
}

export default Home;
