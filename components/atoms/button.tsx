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
  color: ${(props) => props.theme.colors.fontColor};
  outline: none;
  font-family: ${(props) => props.theme.fonts.family};
  background-color: ${(props) =>
    props.styleType === "primary"
      ? props.theme.colors?.primary
      : props.styleType === "secondary"
      ? "transparent"
      : props.theme.colors?.primary};
  padding: 1rem 4rem;
  border: ${(props) =>
    props.styleType === "secondary"
      ? `1px solid ${props.theme.colors?.linesColor}`
      : "none"};
  border-radius: 2rem;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
