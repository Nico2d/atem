import { Navigation } from "../components/organisms/navigation";
import { Sidebar } from "../components/organisms/sidebar";
import styled from "styled-components";
import {
  FontSizeSelector,
  useFontSizeSelector,
} from "../components/molecules/fontSizeSelector";
import {
  ThemeToggler,
  useDarkMode,
} from "../components/molecules/themeToggler";
import { Layout } from "../components/templates/layout";
import { device } from "../Styles/breakpoints";

const Dashboard = () => {
  const [theme, themeToggler] = useDarkMode();
  const [fontSize, fontController] = useFontSizeSelector();

  return (
    <div>
      <Layout>
        <Navigation>
          <Sidebar />
        </Navigation>
        <StyledMain>
          <p>Welcome on Atem</p>

          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          <FontSizeSelector
            fontSize={fontSize}
            fontController={fontController}
          />
          <TestBlock />
          <TestBlock />
          <TestBlock />
        </StyledMain>
        Dashboard
      </Layout>
    </div>
  );
};

export default Dashboard;

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-flow: column;

  @media ${device.tablet} {
    padding-left: 300px;
  }
`;

const TestBlock = styled.div`
  height: 300px;
  width: 300px;
  background: red;
  margin: 2rem;
`;
