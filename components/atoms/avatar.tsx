import styled from "styled-components";

type Props = {
  imageUrl: string;
};

export const Avatar: React.FC<Props> = ({ imageUrl }) => {
  return <Wrapper imageUrl={imageUrl}></Wrapper>;
};

const Wrapper = styled.div<Props>`
  margin: 2rem 0;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  clip-path: circle(75px at center);
`;
