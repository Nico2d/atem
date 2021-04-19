import React from "react";
import { MdChevronLeft, MdLastPage } from "react-icons/md";
import styled from "styled-components";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";
import { NavigationButton } from "./NavigationButton";
import { PaginationDesktop } from "./PaginationDesktop";

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
  const isTablet = useMediaQuery(`(min-width: 513px)`);

  const prevPage = () => {
    currentPage > 1 && setCurrentPage((currentPage) => currentPage - 1);
  };

  const nextPage = () => {
    currentPage < lastPage && setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <Container>
      <NavigationButton onClick={prevPage}>
        <MdChevronLeft />
        Poprzednia
      </NavigationButton>

      {!isTablet ? (
        <NavigationButton isActive={true}>{currentPage}</NavigationButton>
      ) : lastPage < 5 ? (
        [1, 2, 3, 4, 5].map((item) => {
          if (item <= lastPage)
            return (
              <NavigationButton
                isActive={item === currentPage}
                onClick={() => setCurrentPage(item)}
                key={item}
              >
                {item}
              </NavigationButton>
            );
        })
      ) : (
        <PaginationDesktop
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
        />
      )}

      <NavigationButton onClick={nextPage}>
        Następna
        <MdLastPage />
      </NavigationButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;
