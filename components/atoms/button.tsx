import styled from "styled-components";

type Props = {
  text: string;
  styleType: string;
  [x: string]: any;
  clicked?: () => void;
  type?: string;
};

export const Button: React.FC<Props> = ({
  text,
  type,
  clicked,
  ...props
}: Props) => {
  return (
    <StyledButton onClick={clicked} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>`
  color: ${({ theme }) => theme.colors.fontColor};
  outline: none;
  background: ${({ theme, styleType }) =>
    styleType === "primary"
      ? theme.colors.gradient
      : styleType === "secondary"
      ? "transparent"
      : theme.colors.gradient};
  padding: 1rem 4rem;
  border: ${({ theme, styleType }) =>
    styleType === "secondary"
      ? `1px solid ${theme.colors.linesColor}`
      : "none"};
  border-radius: 2rem;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
