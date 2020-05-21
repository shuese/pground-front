import React from 'react';
import * as Styles from './TestComponent.style';

const TestComponent: React.FC<{
  message: string,
  color: string,
}> = ({ message, color }) => {
  return <Styles.Text color={color}>{message}</Styles.Text>;
};
export default TestComponent;
