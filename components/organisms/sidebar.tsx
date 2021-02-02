import React, { useState } from "react";
import styled from "styled-components";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import SystemUpdateAltRoundedIcon from "@material-ui/icons/SystemUpdateAltRounded";

import { Avatar } from "../atoms/avatar";
import { MobileLabel } from "../molecules/mobileLabel";
import { OutsideAlerter } from "../atoms/outSide";

export const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const toggleNavigation = () => {
    console.log("toggle Menu");
    setIsHidden(!isHidden);
  };

  return (
    <>
      {isHidden && <p>ELO</p>}
      <OutsideAlerter method={toggleNavigation}>
        <MobileLabel toggleMenu={toggleNavigation} isClosed={isHidden} />
        <Container isHidden={isHidden}>
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
        </Container>
      </OutsideAlerter>
    </>
  );
};

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
  height: calc(100vh - 50px);
  width: 300px;
  background: ${({ theme }) => theme.colors.sidebar};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 999;
  display: ${(props) => (props.isHidden ? "none" : "flex")};
  flex-flow: column;
  align-items: center;
  position: fixed;
  top: 50px;
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
