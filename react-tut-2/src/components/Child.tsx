interface ChildProps {
  getData: (data: string) => void;
}

function Child({ getData }: ChildProps) {
  const name = "Data from Child";
  return (
    <button
      className="btn btn-outline-primary btn-sm"
      onClick={() => getData(name)}
    >
      Click Me for child to parent communication
    </button>
  );
}

export default Child;
