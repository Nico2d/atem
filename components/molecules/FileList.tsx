import styled from "styled-components";
import { ImFileEmpty } from "@react-icons/all-files/im/ImFileEmpty";

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
      {fileList.map((file) => (
        <div key={file.path}>
          <ImFileEmpty />
          {file.path}
        </div>
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
