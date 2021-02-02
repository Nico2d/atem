import React, { useState } from "react";
import styled from "styled-components";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import SystemUpdateAltRoundedIcon from "@material-ui/icons/SystemUpdateAltRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Avatar } from "../atoms/avatar";
import { MobileLabel } from "../molecules/mobileLabel";

export const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const hideNavigation = () => {
    console.log("toggle Menu");
    setIsHidden(!isHidden);
  };

  return (
    <>
      <MobileLabel toggleMenu={hideNavigation} />
      {/* <Container isHidden={isHidden}>
        <Close onClick={hideNavigation} />

        <UserWrapper>
          <Avatar imageUrl="https://johannesippen.com/img/blog/humans-not-users/header.jpg" />
          <UserName>Jan Kowalski</UserName>
        </UserWrapper>
        <StyledNav>
          <div>
            <IconText>
              <DashboardRoundedIcon /> Dashboard
            </IconText>
            <IconText>
              <SearchRoundedIcon /> Wyszukiwarka
            </IconText>
            <IconText>
              <SystemUpdateAltRoundedIcon /> Wstaw zadanie
            </IconText>
            <IconText>
              <ShoppingCartRoundedIcon /> Koszyk
            </IconText>
          </div>
          <div>
            <IconText>
              <SettingsRoundedIcon /> Ustawienia
            </IconText>
            <IconText>
              <ExitToAppRoundedIcon /> Wyloguj
            </IconText>
          </div>
        </StyledNav>
      </Container> */}
    </>
  );
};
const Close = styled(CloseRoundedIcon)`
  margin: 1rem;
  margin-left: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  flex-flow: row;
  line-height: 50px;

  @media (min-width: 1024px) {
    margin: 2rem 0;
    display: block;
  }
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize}rem;
  margin-left: 1rem;
`;

const Container = styled.div<{ isHidden: boolean }>`
  height: 100vh;
  width: 300px;
  background: ${({ theme }) => theme.colors.sidebar};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 999;
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  flex-flow: column;
  align-items: center;
  position: absolute;
  left: 0;

  @media (min-width: 1024px) {
    position: fixed;
  }
`;

const IconText = styled.div`
  position: relative;
  vertical-align: center;
  text-align: center;
  line-height: 2rem;
  padding-left: 2.5rem;
  cursor: pointer;
  margin-bottom: 16px;

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

const StyledNav = styled.nav`
  text-align-last: left;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex-grow: 1;
`;
