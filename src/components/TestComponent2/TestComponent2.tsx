import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TestComponent2: React.FC<{ initValue?: number }> = ({ initValue = 5 }) => {
  const [count, setCount] = useState(initValue)
  const addCount = 1

  const incriment = (): void => {
    setCount(count + addCount)
  }
  return (
    <>
      <button onClick={incriment}>
        Нажми на меня
			</button>
      <div>count -{count}</div>
    </>
  )
}

TestComponent2.propTypes = {
  initValue: PropTypes.number,
}

TestComponent2.defaultProps = {
  initValue: 5,
}

export default TestComponent2
