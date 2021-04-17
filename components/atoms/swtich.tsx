import styled from "styled-components";

type SwitchProps = {
  value?: boolean;
  method: () => void;
};

export const Switch: React.FC<SwitchProps> = ({ value = false, method }) => {
  return (
    <SwitchWrapper isActive={value}>
      <StyledInput type="checkbox" onClick={method} />
      <Ball></Ball>
    </SwitchWrapper>
  );
};

const Ball = styled.span`
  width: 19px;
  height: 19px;
  background: ${({ theme }) => theme.colors.cardColor};
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SwitchWrapper = styled.div<{ isActive: boolean }>`
  width: 40px;
  height: 20px;
  border-radius: 50px;
  display: inline-block;
  position: relative;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.linesColor};
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  cursor: pointer;

  ${Ball} {
    left: ${({ isActive }) => (isActive ? "20px" : "1px")};
  }
`;

const StyledInput = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 9;
  cursor: pointer;
`;
