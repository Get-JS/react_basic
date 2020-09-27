import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Counter from '../component/Counter';
import { increase, decrease } from '../../../modules/counter';
import useActions from '../../../lib/hooks/useActions';

function CounterContainer() {
  const number = useSelector(({ counter }) => counter.number);
  const [onIncrease, onDecrease] = useActions([increase, decrease], []);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default memo(CounterContainer); //* useSelector를 사용하여 리덕스 상태를 조회했을 때는 최적화 작업이 자동으로 이루어지지 않으므로, memo를 사용하여 성능최적화 한다.
// import React from 'react';
// import { connect } from 'react-redux';
// import Counter from '../component/Counter';
// import { increase, decrease } from '../../../modules/counter';

// function CounterContainer(props) {
//   const { number, increase, decrease } = props;
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// }

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// export default connect(mapStateToProps, { increase, decrease })(
//   CounterContainer,
// );
// * connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우,
// * 해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면
// * 리렌더링이 자동으로 방지되어 성능이 최적화 된다.
