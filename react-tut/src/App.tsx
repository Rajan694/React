import { useState } from "react";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const items = ["Mumbai", "Pune", "Delhi", "Chennai", "Hyderabad"];
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="container">
      <Message>
        <h1>Hello Rajan</h1>
      </Message>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />

      {showComponent && (
        <Alert onClose={() => setShowComponent(false)}>
          This is Rajan's alert'
        </Alert>
      )}
      {/* <Alert>This is Rajan's alert'</Alert> */}
      <Button color="info" onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </Button>
    </div>
  );
}

export default App;
