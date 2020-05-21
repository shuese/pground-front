import React, { useState } from 'react';

const TestComponent2: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);

  const incriment = () => {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={incriment}>
        Нажми на меня
      </button>
      <div>count -{count}</div>
      <div>текст экшена сторибука</div>
    </>
  )
};
export default TestComponent2;
