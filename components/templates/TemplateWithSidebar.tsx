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
      <StyledMain>
        <StyledWrapper>{children}</StyledWrapper>
      </StyledMain>
    </Layout>
  );
};

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  @media ${device.tablet} {
    padding-top: 0px;
    padding-left: 300px;
  }
`;

const StyledWrapper = styled.div`
  display: inherit;
  flex-flow: column;

  @media ${device.tablet} {
    display: block;
  }
`;
