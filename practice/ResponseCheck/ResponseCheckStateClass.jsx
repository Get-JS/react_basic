import React, { PureComponent } from 'react';

class ResponseCheckState extends PureComponent {
  render() {
    console.log('ResponseCheckState-render');
    const {state, message, onClickScreen} = this.props;
    return (
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>
    )
  }
}
export default ResponseCheckState;