import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";
import { Dashboard } from "../../public/icons/dashboard";
import { Search } from "../../public/icons/search";
import { SystemUpdate } from "../../public/icons/system_update";
import { ShoppingCart } from "../../public/icons/shopping_cart";
import { Settings } from "../../public/icons/settings";
import { ExitApp } from "../../public/icons/exit_to_app";

export const NavigationList = () => {
  const router = useRouter();

  return (
    <StyledNav>
      <LinkContainer>
        <Link href="/dashboard">
          <IconText isActive={router.pathname === "/dashboard"}>
            <Dashboard /> Dashboard
          </IconText>
        </Link>

        <Link href="/search">
          <IconText isActive={router.pathname === "/search"}>
            <Search /> Wyszukiwarka
          </IconText>
        </Link>

        <Link href="/add-exercise">
          <IconText isActive={router.pathname === "/add-exercise"}>
            <SystemUpdate /> Wstaw zadanie
          </IconText>
        </Link>

        <Link href="/cart">
          <IconText isActive={router.pathname === "/cart"}>
            <ShoppingCart />
            Koszyk
          </IconText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link href="/settings">
          <IconText isActive={router.pathname === "/settings"}>
            <Settings /> Ustawienia
          </IconText>
        </Link>

        <Link href="/">
          <IconText isActive={router.pathname === "/"}>
            <ExitApp /> Wyloguj
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
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    fill: ${({ theme, isActive }) =>
      isActive ? theme.colors.sidebarHighlight : theme.colors.white};
  }
`;

const StyledNav = styled.nav`
  text-align-last: left;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex-grow: 1;
`;
