import { ImFileEmpty } from "@react-icons/all-files/im/ImFileEmpty";
import styled from "styled-components";

export const File = ({ file }) => {
  return (
    <FileContainer>
      <ImFileEmpty />
      {file.name}
      {/* {file.name} - {(file.size / 1024).toFixed(2)} mb */}
      {/*   <span onClick={() => removeFile(file.name)}>X</span> */}
    </FileContainer>
  );
};

const FileContainer = styled.div`
  height: 200px;
  width: 100px;
  /* background: rgba(100, 0, 0, 0.1); */
  margin: .5rem;

  > svg {
    width: 100%;
    height: auto;
  }
`;
