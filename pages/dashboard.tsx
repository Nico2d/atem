import styled from "styled-components";

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
  width: 200px;
  background: red;
  margin: 2rem;
`;
