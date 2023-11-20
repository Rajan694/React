interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="btn btn-outline-primary" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
