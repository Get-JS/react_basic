import React, { memo } from 'react';

const ResponseCheckState = memo((props) => {
  console.log('ResponseCheckState-render');
  const { state, message, onClickScreen } = props;
  return (
    <div
      id="screen"
      className={state}
      onClick={onClickScreen}
    >
      {message}
    </div>
  )
});

export default ResponseCheckState;