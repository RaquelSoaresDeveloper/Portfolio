import styled from "styled-components";
import Header from "./Components/Header";
import  Inicio  from "./Components/Inicio";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Inicio/>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  background: linear-gradient(
    159deg,
    rgb(93, 67, 237) 0%,
    rgb(155, 57, 241) 100%
  );
  height: 100vh;
  @media(max-width:640px) {
    height: 100%;
    padding-bottom: 1rem;
    
  }
`;
