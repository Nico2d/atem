import React, { useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import styled from "styled-components";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (nb) => void;
  lastPage?: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  lastPage,
}) => {
  const middle =
    currentPage < 3
      ? 3
      : currentPage > lastPage - 2
      ? lastPage - 2
      : currentPage;

  const left = middle - 1 > 2 ? middle - 1 : 2;
  const right = middle + 1 < lastPage - 1 ? middle + 1 : lastPage - 1;

  const prevPage = () => {
    currentPage > 1 && setCurrentPage((currentPage) => currentPage - 1);
  };

  const nextPage = () => {
    currentPage < lastPage && setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <Container>
      <Wrapper onClick={prevPage}>
        <MdChevronLeft />
        Poprzednia
      </Wrapper>

      <Wrapper isActive={1 === currentPage} onClick={() => setCurrentPage(1)}>
        1
      </Wrapper>
      {currentPage - 2 > 1 && <Wrapper>...</Wrapper>}

      {[left, middle, right].map((item) => (
        <Wrapper
          isActive={item === currentPage}
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </Wrapper>
      ))}

      {currentPage + 2 < lastPage && <Wrapper>...</Wrapper>}
      <Wrapper
        isActive={lastPage === currentPage}
        onClick={() => setCurrentPage(lastPage)}
      >
        {lastPage}
      </Wrapper>

      <Wrapper onClick={nextPage}>
        Następna
        <MdLastPage />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div<{ isActive?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.cardColor};
  min-width: 35px;
  height: 35px;
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
