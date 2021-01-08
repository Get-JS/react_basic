import React, { PureComponent } from 'react';

class RenderAverage extends PureComponent {
  render() {
    console.log('RenderAverage-render');
    const { result, onReset } = this.props;
    return (
      result.length &&  
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  }
};

export default RenderAverage;