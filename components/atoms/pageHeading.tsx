import styled from "styled-components";

type PageHeadingType = {
  title: string;
};

export const PageHeading: React.FC<PageHeadingType> = ({ title }) => {
  return <Heading>{title}</Heading>;
};

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.5}rem;
  font-weight: 300;
  margin: 2rem 1rem;
`;
