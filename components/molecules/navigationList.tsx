import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconDashboard } from "../../public/icons/iconDashboard";
import { IconSearch } from "../../public/icons/iconSearch";
import { IconSystemUpdate } from "../../public/icons/iconSystemUpdate";
import { IconShoppingCart } from "../../public/icons/iconShoppingCart";
import { IconSettings } from "../../public/icons/iconSettings";
import { IconExitApp } from "../../public/icons/iconExitApp";

export const NavigationList = () => {
  const router = useRouter();

  return (
    <StyledNav>
      <LinkContainer>
        <Link href="/dashboard">
          <IconText
            isActive={router.pathname === "/dashboard"}
            title="Dashboard"
          >
            <IconDashboard /> Dashboard
          </IconText>
        </Link>

        <Link href="/search">
          <IconText
            isActive={router.pathname === "/search"}
            title="Wyszukiwarka"
          >
            <IconSearch /> Wyszukiwarka
          </IconText>
        </Link>

        <Link href="/add-exercise">
          <IconText
            isActive={router.pathname === "/add-exercise"}
            title="Wstaw zadanie"
          >
            <IconSystemUpdate /> Wstaw zadanie
          </IconText>
        </Link>

        <Link href="/cart">
          <IconText isActive={router.pathname === "/cart"} title="Koszyk">
            <IconShoppingCart />
            Koszyk
          </IconText>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link href="/settings">
          <IconText
            isActive={router.pathname === "/settings"}
            title="Ustawienia"
          >
            <IconSettings /> Ustawienia
          </IconText>
        </Link>

        <Link href="/">
          <IconText isActive={router.pathname === "/"} title="Wyloguj">
            <IconExitApp /> Wyloguj
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
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.sidebarHighlight : "inherit"};
  font-weight: ${(props) => (props.isActive ? "500" : "inherit")};

  ::after {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }

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
