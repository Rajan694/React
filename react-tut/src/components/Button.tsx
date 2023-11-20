// done props for button

import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  color?: string;
  // color?: "primary" | "secondary" | "danger"; //only from these types otherwise error
  onClick: () => void;
}
function Button({ children, color = "primary", onClick }: ButtonProps) {
  //setting default color
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
