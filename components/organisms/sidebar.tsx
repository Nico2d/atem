import React from "react";
import styled from "styled-components";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import SystemUpdateAltRoundedIcon from "@material-ui/icons/SystemUpdateAltRounded";
import { Avatar } from "../atoms/avatar";

export const Sidebar = () => {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar imageUrl="https://johannesippen.com/img/blog/humans-not-users/header.jpg" />
        Jan Kowalski
      </AvatarWrapper>

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
  );
};

const AvatarWrapper = styled.div`
  height: 350px;
`;

const Container = styled.div`
  height: 100vh;
  width: 300px;
  background: ${({ theme }) => theme.colors.sidebar};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: fixed;
  z-index: 999;
  display: flex;
  flex-flow: column;
  align-items: center;
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
  background: red;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;
