import styled from "styled-components";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";

const Dashboard = () => {
  return (
    <TemplateWithSidebar>
      <p>Dashboard</p>

      <TestBlock />
      <TestBlock />
      <TestBlock />
    </TemplateWithSidebar>
  );
};

export default Dashboard;

const TestBlock = styled.div`
  height: 300px;
  width: 300px;
  background: red;
  margin: 2rem;
`;
