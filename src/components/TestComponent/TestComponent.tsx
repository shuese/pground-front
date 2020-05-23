import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './TestComponent.style';

const TestComponent: React.FC<{
  message: string,
  color?: string,
}> = ({ message, color }) => {
  return <Styles.Text color={color}>{message}</Styles.Text>;
};

TestComponent.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
}

TestComponent.defaultProps = {
  message: 'текст',
  color: '#000',
}

export default TestComponent;
