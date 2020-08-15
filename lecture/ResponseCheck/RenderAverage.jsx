import React, { memo } from 'react';

const RenderAverage = memo((props) => {
  console.log('RenderAverage-render');
  const { result, onReset } = props;
  return (
    result.length &&
    <>
      <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
      <button onClick={onReset}>리셋</button>
    </>
  );
});

export default RenderAverage;