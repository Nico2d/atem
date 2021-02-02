import React, { useRef, useEffect } from "react";

const useOutsideAlerter = (ref, method) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        method();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export const OutsideAlerter = ({ children, method, isActive }) => {
  if (isActive) return <div>{children}</div>;

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, method);

  return <div ref={wrapperRef}>{children}</div>;
};
