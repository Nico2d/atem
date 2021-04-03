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
        <p key={file.path}>
          <ImFileEmpty />
          {file.path}
        </p>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ListVariantGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px;

  > span {
    color: red;
    cursor: pointer;
    z-index: 20;
  }
`;

const ListVariantList = styled.div`
  text-align: left;

  svg {
    margin-right: 5px;
  }
`;
