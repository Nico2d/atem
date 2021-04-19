import React from "react";
import { NavigationButton } from "./NavigationButton";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (nb) => void;
  lastPage?: number;
};

export const PaginationDesktop: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  lastPage,
}) => {
  let middle: number;

  if (currentPage < 3) {
    middle = 3;
  } else if (currentPage > lastPage - 2) {
    middle = lastPage - 2;
  } else {
    middle = currentPage;
  }

  const left = middle - 1 > 2 ? middle - 1 : 2;
  const right = middle + 1 < lastPage - 1 ? middle + 1 : lastPage - 1;

  return (
    <>
      <NavigationButton
        isActive={1 === currentPage}
        onClick={() => setCurrentPage(1)}
      >
        1
      </NavigationButton>
      {currentPage - 2 > 1 && <NavigationButton>...</NavigationButton>}

      {[left, middle, right].map((item) => (
        <NavigationButton
          isActive={item === currentPage}
          onClick={() => setCurrentPage(item)}
          key={item}
        >
          {item}
        </NavigationButton>
      ))}

      {currentPage + 2 < lastPage && <NavigationButton>...</NavigationButton>}
      <NavigationButton
        isActive={lastPage === currentPage}
        onClick={() => setCurrentPage(lastPage)}
      >
        {lastPage}
      </NavigationButton>
    </>
  );
};
