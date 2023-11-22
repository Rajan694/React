import { forwardRef, LegacyRef } from "react";

const ForwardRefs = forwardRef<HTMLInputElement>(
  (props, ref: LegacyRef<HTMLInputElement>) => {
    return <input ref={ref} type="text" />;
  }
);

export default ForwardRefs;
