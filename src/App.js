import React from 'react';
import PokeCard from './components/PokeCard';
import SearchForm from './components/SearchForm';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 7.5vh;  
`

function App() {
  
  return (
    <StyledDiv className="App">
      <SearchForm />
      <PokeCard />
    </StyledDiv>
  );
}

export default App;