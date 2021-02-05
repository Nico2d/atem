import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import SystemUpdateAltRoundedIcon from "@material-ui/icons/SystemUpdateAltRounded";
import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";

export const NavigationList = () => {
  const router = useRouter();

  return (
    <StyledNav>
      <LinkContainer>
        <Link href="/dashboard">
          <IconText isActive={router.pathname === "/dashboard"}>
            <DashboardRoundedIcon /> Dashboard
          </IconText>
        </Link>

        <Link href="/search">
          <IconText isActive={router.pathname === "/search"}>
            <SearchRoundedIcon /> Wyszukiwarka
          </IconText>
        </Link>

        <Link href="/add-exercise">
          <IconText isActive={router.pathname === "/add-exercise"}>
            <SystemUpdateAltRoundedIcon /> Wstaw zadanie
          </IconText>
        </Link>

        <Link href="/cart">
          <IconText isActive={router.pathname === "/cart"}>
            <ShoppingCartRoundedIcon /> Koszyk
          </IconText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link href="/settings">
          <IconText isActive={router.pathname === "/settings"}>
            <SettingsRoundedIcon /> Ustawienia
          </IconText>
        </Link>

        <Link href="/">
          <IconText isActive={router.pathname === "/"}>
            <ExitToAppRoundedIcon /> Wyloguj
          </IconText>
        </Link>
      </LinkContainer>
    </StyledNav>
  );
};

const LinkContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const IconText = styled.a<{ isActive?: boolean }>`
  position: relative;
  vertical-align: center;
  text-align: center;
  line-height: 2rem;
  cursor: pointer;
  margin-bottom: 16px;
  padding-left: 2.5rem;
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.3}rem;
  color: ${(props) =>
    props.isActive ? props.theme.colors.sidebarHighlight : "inherit"};
  font-weight: ${(props) => (props.isActive ? "500" : "inherit")};

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
