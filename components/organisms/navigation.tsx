import { MobileLabel } from "../molecules/mobileLabel";
import { OutsideMethod } from "../atoms/OutsideMethod";
import { useState } from "react";
import { device } from "../../Styles/breakpoints";
import { useMediaQuery } from "../../Hooks/useMediaQuery";

export const Navigation = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const isDesktop = useMediaQuery(device.tablet);

  const toggleNavigation = () => {
    setIsHidden(!isHidden);
  };

  if (isDesktop) return <> {children} </>;

  return (
    <OutsideMethod method={toggleNavigation} isActive={isHidden}>
      <MobileLabel toggleMenu={toggleNavigation} isClosed={isHidden} />
      {!isHidden && children}
    </OutsideMethod>
  );
};
