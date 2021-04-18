import styled from "styled-components";
import { InputField } from "../components/molecules/inputField";
import { inputTypes } from "../utils/enums";
import { MdFilterList } from "react-icons/md";
import { SearchFileList } from "../components/molecules/SearchFileList";
import { Pagination } from "../components/molecules/Pagination";
import { useState } from "react";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);

  console.log("current page: ", currentPage);
  return (
    <Container>
      {/* <PageHeading title="Search" /> */}

      <SearchWrapper>
        <InputField placeholder="Szukaj" type={inputTypes.text} name="search" />
        <MdFilterList />
      </SearchWrapper>
      {/* <SearchFileList page={currentPage} /> */}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={10}
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
