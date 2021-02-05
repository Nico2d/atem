import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import SystemUpdateAltRoundedIcon from "@material-ui/icons/SystemUpdateAltRounded";
import styled from "styled-components";
import Link from "next/link";

export const NavigationList = () => {
  return (
    <StyledNav>
      <LinkContainer>
        <Link href="/dashboard">
          <IconText>
            <DashboardRoundedIcon /> Dashboard
          </IconText>
        </Link>

        <Link href="/search">
          <IconText>
            <SearchRoundedIcon /> Wyszukiwarka
          </IconText>
        </Link>

        <Link href="/add-exercise">
          <IconText>
            <SystemUpdateAltRoundedIcon /> Wstaw zadanie
          </IconText>
        </Link>

        <Link href="/cart">
          <IconText>
            <ShoppingCartRoundedIcon /> Koszyk
          </IconText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link href="/settings">
          <IconText>
            <SettingsRoundedIcon /> Ustawienia
          </IconText>
        </Link>

        <Link href="/">
          <IconText>
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

const IconText = styled.a`
  position: relative;
  vertical-align: center;
  text-align: center;
  line-height: 2rem;
  cursor: pointer;
  margin-bottom: 16px;
  padding-left: 2.5rem;
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.3}rem;

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
