import React, { useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import styled from "styled-components";

type PaginationProps = {
  pages: number;
  setPage: (nb) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ pages, setPage }) => {
  //   const [currentPage, setCurrentPage] = useState(1);

  return (
    <Container>
      <Wrapper onClick={() => setPage((currentPage) => 1)}>
        1{/* Poprzednia */}
      </Wrapper>
      <Wrapper onClick={() => setPage((currentPage) => currentPage - 1)}>
        <MdChevronLeft />
        {/* Poprzednia */}
      </Wrapper>

      {/* {[1, 2, 3].map((item) => (
        <Wrapper
          isActive={item === currentPage}
          onClick={() => setPage(item)}
        >
          {currentPage}
        </Wrapper>
      ))} */}

      <Wrapper isActive={true}>{pages}</Wrapper>

      <Wrapper onClick={() => setPage((currentPage) => currentPage + 1)}>
        {/* Następna */}
        <MdChevronRight />
      </Wrapper>
      <Wrapper onClick={() => setPage((currentPage) => currentPage + 1)}>
        {/* Następna */}
        <MdLastPage />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div<{ isActive?: boolean; onClick? }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.cardColor};
  min-width: 50px;
  height: 50px;
  border-radius: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 0 1rem;
  cursor: pointer;
  user-select: none;

  svg {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;
