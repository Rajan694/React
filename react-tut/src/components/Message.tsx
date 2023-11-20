// done parent to child communication

import { ReactNode } from "react";

interface MessageProps {
  children: ReactNode; //send children
}
function Message({ children }: MessageProps) {
  return children; //props i.e. data from parent to child inside component defn
}

export default Message;
