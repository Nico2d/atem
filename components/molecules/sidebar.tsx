import React from "react";
import styled from "styled-components";
import { device } from "../../Styles/breakpoints";
import { Avatar } from "../atoms/avatar";
import { NavigationList } from "../molecules/navigationList";

export const Sidebar = () => {
  return (
    <Container>
      <UserWrapper>
        <Avatar imageUrl="https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png" />
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

  @media ${device.tablet} {
    margin: 2rem 0;
    display: block;
  }
`;

const UserName = styled.p`
  font-size: ${({ theme }) => theme.fonts.fontSize}rem;
  text-align: center;
  margin-left: 1rem;

  @media ${device.tablet} {
    margin-left: 0;
  }
`;

const Container = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.45));
  z-index: 999;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: fixed;
  left: 0;
  height: calc(100vh - 50px);
  top: 50px;

  @media ${device.tablet} {
    height: 100vh;
    top: 0;
  }
`;
