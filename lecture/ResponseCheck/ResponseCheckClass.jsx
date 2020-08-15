import React, { PureComponent } from 'react';
import RenderAverage from './RenderAverageClass';
import ResponseCheckState from './ResponseCheckStateClass';

class ResponseCheck extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state } = this.state;
    if (state === 'waiting') {
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭'
        });
        this.startTime = Date.now();
      }, Math.floor(Math.random() * 1000) + 2000); // * 2초~3초 랜덤
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.'
      });
    } 
    else if (state === 'ready') { // * 성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
      });
    } 
    else if (state === 'now') { // * 반응속도 체크
      this.endTime = Date.now();
      this.setState(prevState => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime, this.startTime]
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: []
    });
  };

  render() {
    const { state, message, result } = this.state;
    return (
      <>
        <ResponseCheckState state={state} message={message} onClickScreen={this.onClickScreen}/>
        <RenderAverage result={result} onReset={this.onReset}/>
      </>
    )
  }
}

export default ResponseCheck;