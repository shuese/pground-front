import React from 'react';
import GlobalStyle from './GlobalStyles'
import Text from './components/TestComponent'
import Counter from './components/TestComponent2';

const App: React.SFC = () => {
  return (
    <>
      <Text message="kek" color="red" />
      <Counter />
      <Counter initValue={3} />
      <GlobalStyle />
    </>
  );
}

export default App;
