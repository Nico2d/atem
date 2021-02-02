import styled from "styled-components";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

export const MobileLabel: React.FC<{ toggleMenu: () => void }> = ({
  toggleMenu,
}) => {
  return (
    <Label>
      <Title>ATEM</Title>
      <Menu onClick={toggleMenu} />
    </Label>
  );
};

const Title = styled.h1`
  letter-spacing: 5px;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.4}rem;
  margin: 0;
  line-height: 50px;
`;

const Menu = styled(MenuRoundedIcon)`
  margin: auto 0;
`;

const Label = styled.div`
  height: 50px;
  width: 100vw;
  background: ${({ theme }) => theme.colors.cardColor};
  top: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;
