import styled from "styled-components";
import { device } from "../../Styles/breakpoints";

type Props = {
  text: string;
  variant?: string;
  clicked?: () => void;
  type?: string;
};

export const Button: React.FC<Props> = ({
  text,
  clicked,
  variant = "primary",
  type = "button",
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return ButtonExtendSolid;
      case "secondary":
        return ButtonExtendBlank;
    }
  };

  return (
    <StyledButton as={getButtonStyle()} onClick={clicked} type={type}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  outline: none;
  border-radius: 2rem;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 0.5rem 2rem;

  @media ${device.tablet} {
    padding: 1rem 4rem;
  }
`;

export const ButtonExtendBlank = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.fontColor};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.linesColor};
`;

export const ButtonExtendSolid = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.gradient};
  border: none;
`;
