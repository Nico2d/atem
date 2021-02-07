import styled from "styled-components";
import { device } from "../../Styles/breakpoints";
import { Sidebar } from "../molecules/sidebar";
import { Navigation } from "../organisms/navigation";
import { Layout } from "./layout";

export const TemplateWithSidebar = ({ children }) => {
  return (
    <Layout>
      <Navigation>
        <Sidebar />
      </Navigation>
      <StyledMain>{children}</StyledMain>
    </Layout>
  );
};

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-flow: column;
  padding: 1rem;
  padding-top: 66px;

  @media ${device.tablet} {
    padding-left: 300px;
    padding-top: 1rem;
  }
`;
