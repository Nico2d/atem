import styled from "styled-components";

export const PageHeading: React.FC<{ title: string }> = ({ title }) => {
  return <Heading>{title}</Heading>;
};

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.fonts.fontSize * 1.5}rem;
  font-weight: 300;
  margin: 2rem 1rem;
`;
