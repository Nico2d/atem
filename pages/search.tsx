import styled from "styled-components";
import { InputField } from "../components/molecules/inputField";
import { inputTypes } from "../utils/enums";
import { MdFilterList } from "react-icons/md";
import { Button } from "../components/atoms/Button";
import { ImFileEmpty } from "@react-icons/all-files/im/ImFileEmpty";

const Search = () => {
  const exerciseList = [
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
  ];

  return (
    <Container>
      {/* <PageHeading title="Search" /> */}

      <SearchWrapper>
        <InputField placeholder="Szukaj" type={inputTypes.text} name="search" />
        <MdFilterList />
      </SearchWrapper>
      <FileListContainer>
        {exerciseList.map((exercise) => (
          <FileContainer>
            <FileIcon />
            <FileTitle>{exercise.name}</FileTitle>
            <InfoWrapper>
              <span>{`ocena: ${exercise.grade}`}</span>
              <span>{`${exercise.price}zł`}</span>
            </InfoWrapper>
            <Button text="Szczegóły" variant="secondary" />
          </FileContainer>
        ))}
      </FileListContainer>
      {/* <div>Paginacja</div> */}
    </Container>
  );
};

export default Search;

const FileTitle = styled.p`
  text-align: center;
`;

const FileIcon = styled(ImFileEmpty)`
  width: 100px;
  height: 100px;
  margin: auto;
`;

const InfoWrapper = styled.div`
  font-size: ${({ theme }) => theme.fonts.fontSize * 0.9}rem;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const FileListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const FileContainer = styled.div`
  margin: auto;
  display: flex;
  flex-flow: column;
  height: 250px;
  width: 150px;
  background: ${({ theme }) => theme.colors.cardColor};
  padding: 1rem;
  border-radius: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  > button {
    padding-left: unset;
    padding-right: unset;
    margin-top: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 1rem;
  width: 100%;
  max-width: 964px;
`;

const SearchWrapper = styled.div`
  display: inline-flex;
  margin-bottom: 2rem;

  svg {
    font-size: 1.7rem;
    margin-left: 1rem;
    margin-top: auto;
    cursor: pointer;
  }
`;
