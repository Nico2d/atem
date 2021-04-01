import styled from "styled-components";
import { TemplateWithSidebar } from "../components/templates/TemplateWithSidebar";

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>

      <TestBlock />
      <TestBlock />
      <TestBlock />
    </>
  );
};

export default Dashboard;

const TestBlock = styled.div`
  height: 300px;
  width: 300px;
  background: red;
  margin: 2rem;
`;
