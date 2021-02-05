import styled from "styled-components";
import { device } from "../../Styles/breakpoints";

type Props = {
  imageUrl: string;
};

export const Avatar: React.FC<Props> = ({ imageUrl }) => {
  return <Wrapper imageUrl={imageUrl}></Wrapper>;
};

const Wrapper = styled.div<Props>`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: circle(50%);
  margin: auto;
  width: 50px;
  height: 50px;

  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
`;
