import React from 'react';
import GlobalStyle from './GlobalStyles';
import Text from './components/TestComponent';
import Counter from './components/TestComponent2';
// import logo from './assets/logo192.png'

const text = 'lelele';

const App: React.SFC = () => {
  return (
    <>
      {/* <img src={logo} /> */}
      <Text message="Наелся и спит" />
      <Text message="kek" color="red" />
      <Counter />
      <Counter initValue={3} />
      <GlobalStyle />
    </>
  );
}

export default App;
