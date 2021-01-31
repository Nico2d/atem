import styled from "styled-components";

type Props = {
  text: string;
  //aLl other props
  [x: string]: any;
};

export const Button: React.FC<Props> = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  color: white;
  background-color: #1378ff;
  padding: 1rem 4rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
