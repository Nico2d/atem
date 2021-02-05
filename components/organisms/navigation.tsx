import { MobileLabel } from "../molecules/mobileLabel";
import { OutsideAlerter } from "../atoms/outSide";
import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { device } from "../../Styles/breakpoints";

export const Navigation = ({ children }) => {
  const [isHidden, setIsHidden] = useState(true);
  const isDesktop = useMediaQuery(device.tablet);

  const toggleNavigation = () => {
    setIsHidden(!isHidden);
  };

  if (isDesktop) return <> {children} </>;

  return (
    <OutsideAlerter method={toggleNavigation} isActive={isHidden}>
      <MobileLabel toggleMenu={toggleNavigation} isClosed={isHidden} />
      {!isHidden && children}
    </OutsideAlerter>
  );
};
