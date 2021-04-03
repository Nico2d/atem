import styled from "styled-components";
import { useIsAuth } from "../../Hooks/useIsAuth";
import { device } from "../../Styles/breakpoints";
import { Sidebar } from "../molecules/sidebar";
import { Navigation } from "../organisms/navigation";
import { Layout } from "./layout";

export const TemplateWithSidebar = ({ children }) => {
  // const isAuth = useIsAuth(undefined, "/");
  // if (!isAuth) return null;

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
  width: 100%;

  @media ${device.tablet} {
    display: block;
    width: fit-content;
  }
`;
