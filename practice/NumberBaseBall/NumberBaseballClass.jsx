import React, { PureComponent, createRef } from 'react';
import Try from './TryClass';

/**
 * * pureComponent 활용으로 shouldComponentUpdate처럼 업데이트 마운트를 해야할지 결정
 * * 참조 관계는 판별하기 어렵다. 혹은, pureComponent로 안되는 경우가 있기 때문에 
 * * 커스텀은 Component + shouldComponentUpdate() 를 활용 해야 한다.
 */
class NumberBaseball extends PureComponent {
  state = {
    result: '',
    value: '',
    answer: getNumbers(), // * ex: [1,3,5,7]
    tries: [], // * only immutable
  };

  inputRef = createRef(); // this.inputRef

  onSubmitForm = (e) => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    if (value === answer.join('')) {
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: value, result: '홈런!' }],
        }
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: []
      });
      this.inputRef.current.focus();
    } 
    else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
        this.inputRef.current.focus();
      } 
      else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
            value: '',
          };
        });
        this.inputRef.current.focus();
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const {onSubmitForm , onChangeInput ,inputRef} = this;
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
          <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
            );
          })}
        </ul>
      </>
    );
  }
}

function getNumbers() {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  // alert(array);
  return array;
}

export default NumberBaseball;