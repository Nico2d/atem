import React from "react";
import styled from "styled-components";
import { Avatar } from "../atoms/avatar";
import { NavigationList } from "../molecules/navigationList";

export const Sidebar = () => {
  return (
    <Container>
      <UserWrapper>
        <Avatar imageUrl="https://johannesippen.com/img/blog/humans-not-users/header.jpg" />
        <UserName>Jan Kowalski</UserName>
      </UserWrapper>

      <NavigationList />
    </Container>
  );
};

const UserWrapper = styled.div`
  display: flex;
  flex-flow: row;
  line-height: 50px;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    margin: 2rem 0;
    display: block;
  }
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize}rem;
  text-align: center;

  @media (max-width: 1024px) {
    margin-left: 1rem;
  }
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  top: 50px;
  width: 300px;
  background: ${({ theme }) => theme.colors.sidebar};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 999;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: fixed;
  left: 0;

  @media (min-width: 1024px) {
    height: 100vh;
    top: 0;
  }
`;
