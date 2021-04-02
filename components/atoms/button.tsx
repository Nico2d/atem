import styled from "styled-components";

type Props = {
  text: string;
  styleType: string;
  clicked?: () => void;
  type?: string;
};

export const Button: React.FC<Props> = ({
  text,
  type,
  clicked,
  styleType = "primary",
}: Props) => {
  return (
    <StyledButton
      as={styleType === "primary" ? ButtonExtendSolid : ButtonExtendBlank}
      onClick={clicked}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  outline: none;
  border: none;
  padding: 1rem 4rem;
  border-radius: 2rem;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ButtonExtendBlank = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.fontColor};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.linesColor};
`;

export const ButtonExtendSolid = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.gradient};
`;
