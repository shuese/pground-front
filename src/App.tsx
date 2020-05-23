import React from 'react';
import Text from './components/TestComponent'
import Counter from './components/TestComponent2';

function App() {
  return (
    <>
      <Text message="kek" color="red" />
      <Counter />
      <Counter initValue={3} />
    </>
  );
}

export default App;
