import styled from "styled-components";
import { StyledFile } from "../atoms/StyledFile";

export const FileList = ({ fileList, variant }) => {
  const setStyleVariant = () => {
    switch (variant) {
      case "grid":
        return ListVariantGrid;
      case "list":
        return ListVariantList;
    }
  };

  return (
    <Wrapper as={setStyleVariant()}>
      {fileList?.map((file) => (
        <StyledFile file={file} key={file.path} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ListVariantGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 10px;

  > div {
    display: flex;
    flex-flow: column;
    width: 100px;
    margin: 0 auto;
  }

  svg {
    width: 100%;
    height: auto;
  }
`;

const ListVariantList = styled.div`
  text-align: left;

  > div {
    display: block;
    margin-bottom: 0.5rem;
  }

  svg {
    margin-right: 5px;
  }
`;
