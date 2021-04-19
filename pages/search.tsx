import styled from "styled-components";
import { InputField } from "../components/molecules/inputField";
import { inputTypes } from "../utils/enums";
import { MdFilterList } from "react-icons/md";
import { SearchFileList } from "../components/molecules/SearchFileList";
import { Pagination } from "../components/molecules/Pagination/Pagination";
import { useState } from "react";
import { useMediaQuery } from "../Hooks/useMediaQuery";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isTablet = useMediaQuery(`(min-width: 513px)`);
  const elementsOnPage = isTablet ? 15 : 10;

  return (
    <Container>
      <SearchWrapper>
        <InputField placeholder="Szukaj" type={inputTypes.text} name="search" />
        <MdFilterList />
      </SearchWrapper>

      <SearchFileList
        exerciseList={exerciseList}
        page={currentPage}
        elementsOnPage={elementsOnPage}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={Math.ceil(exerciseList.length / elementsOnPage)}
      />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 1rem;
  width: 100%;
  max-width: 964px;
`;

const SearchWrapper = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;

  svg {
    font-size: 1.7rem;
    margin-left: 1rem;
    margin-top: auto;
    cursor: pointer;
  }
`;

const exerciseList = [
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 0",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 1",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 2",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 2",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 3",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 2",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 3",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 2",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 3",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 2",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 3",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 2",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 13",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 14",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 15",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 16",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 17",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 18",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 19",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 20",
    type: "doc",
    grade: 4,
    price: 20,
  },
  {
    name: "Złożoność obliczeniowa - Lista 2 Zad 21",
    type: "doc",
    grade: 4,
    price: 20,
  },
];
