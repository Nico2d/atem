import { ImFileEmpty } from "@react-icons/all-files/im/ImFileEmpty";
import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

export const SearchFileList = ({ page }) => {
  const elementsOnPage = 15;

  return (
    <FileListContainer>
      {exerciseList.map((exercise, index) => {
        if (
          index >= elementsOnPage * (page - 1) &&
          index < elementsOnPage * page
        )
          return (
            <FileContainer>
              <FileIcon />
              <FileTitle>{exercise.name}</FileTitle>
              <InfoWrapper>
                <span>{`ocena: ${exercise.grade}`}</span>
                <span>{`${exercise.price}zł`}</span>
              </InfoWrapper>
              <Button text="Szczegóły" variant="secondary" />
            </FileContainer>
          );
      })}
    </FileListContainer>
  );
};

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
  display: flex;
  flex-flow: column;
  height: 250px;
  width: 100%;
  min-width: 150px;
  background: ${({ theme }) => theme.colors.cardColor};
  padding: 1rem;
  border-radius: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  > button {
    padding: 0.7rem 0;
    margin-top: auto;
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
