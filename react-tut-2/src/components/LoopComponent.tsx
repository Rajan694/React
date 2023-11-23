import GreetMessage from "./GreetMessage";

function LoopComponent() {
  const name = ["Rajan", "Sandy", "Aman", "Raj"];
  return (
    <>
      <div>
        <ul className="list-group">
          {name.map((n, index) => (
            <li className="list-group-item" key={index}>
              <GreetMessage name={n} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default LoopComponent;
