import styled from "styled-components";
import { device } from "../../../Styles/breakpoints";

export const CardHeading = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.2}rem;
  font-weight: 400;

  @media ${device.laptopM} {
    font-size: ${({ theme }) => theme.fonts.fontSize * 1.5}rem;
  }
`;
