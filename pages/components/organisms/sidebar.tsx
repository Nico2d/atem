import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <Container>
      <Avatar />
      Jan Kowalski
      <p>Dashboard</p>
    </Container>
  );
};

const Avatar = styled.div`
  margin: 2rem 0;
  background: red;
  width: 120px;
  height: 120px;
  clip-path: circle(60px at center);
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
