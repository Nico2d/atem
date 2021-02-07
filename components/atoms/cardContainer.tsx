import styled from "styled-components";
import { device } from "../../Styles/breakpoints";

type CardContainer = {
  height?: string;
  width?: string;
};

export const CardContainer: React.FC<CardContainer> = ({
  height,
  width,
  children,
}) => {
  return (
    <StyledDiv height={height} width={width}>
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div<CardContainer>`
  background: ${({ theme }) => theme.colors.cardColor};
  padding: 1rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: block;
  height: ${({ height }) => height};
  width: 100%;
  margin-bottom: 2rem;

  @media ${device.mobileL} {
    border-radius: 1rem;
  }

  @media ${device.tablet} {
    width: ${({ width }) => width};
    margin: 1rem;
  }
`;
