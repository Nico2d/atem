import { MobileLabel } from "../molecules/mobileLabel";
import { OutsideAlerter } from "../atoms/outSide";
import { useState } from "react";

export const MobileNavigation = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleNavigation = () => {
    setIsHidden(!isHidden);
  };

  if (window.innerWidth >= 1024) return <>{children} </>;

  return (
    <OutsideAlerter method={toggleNavigation} isActive={isHidden}>
      <MobileLabel toggleMenu={toggleNavigation} isClosed={isHidden} />
      {!isHidden && children}
    </OutsideAlerter>
  );
};
