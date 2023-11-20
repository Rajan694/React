interface GreetMessageProps {
  name: string;
}

function GreetMessage({ name }: GreetMessageProps) {
  return <h1 className="ms-3">{name}</h1>;
}

export default GreetMessage;
