import styled from "styled-components";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

export const MobileLabel: React.FC<{
  toggleMenu: () => void;
  isClosed: boolean;
}> = ({ toggleMenu, isClosed }) => {
  return (
    <Container>
      <Logo>ATEM</Logo>
      <Menu onClick={toggleMenu}>
        {isClosed ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
      </Menu>
    </Container>
  );
};

const Logo = styled.h1`
  letter-spacing: 5px;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.4}rem;
  margin: 0;
  line-height: 50px;
`;

const Menu = styled.div`
  margin: auto 0;
`;

const Container = styled.div`
  height: 50px;
  width: 100vw;
  background: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.white};
  top: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  z-index: 900;
`;
