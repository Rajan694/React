import GreetMessage from "./GreetMessage";

function LoopComponent() {
  const name = ["Rajan", "Sandy", "Aman", "Raj"];
  return (
    <>
      <div>
        <ul className="list-group">
          {name.map((n) => (
            <li className="list-group-item">
              <GreetMessage name={n} key={n} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default LoopComponent;
