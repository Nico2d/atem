import React, { useRef } from "react";
import { useOutsideMethod } from "../../Hooks/useOutsideMethod";

export const OutsideMethod = ({ children, method, isActive }) => {
  if (isActive) return <div>{children}</div>;

  const wrapperRef = useRef(null);
  useOutsideMethod(wrapperRef, method);

  return <div ref={wrapperRef}>{children}</div>;
};
