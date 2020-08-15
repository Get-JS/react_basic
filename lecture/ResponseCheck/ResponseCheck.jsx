import React, { useState, useRef, memo } from 'react';
import ResponseCheckState from './ResponseCheckState';
import RenderAverage from './RenderAverage';

const ResponseCheck = memo(() => {
  console.log('ResponseCheck-render');

  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);

  const timeout = useRef(null); // * 변경해도 재 렌더링을 하지 않는다. -> 정보만 수정됨 (class의 프로퍼티의 역할)
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = () => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
    }
    else if (state === 'ready') {
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    }
    else if (state === 'now') {
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult(prevResult => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  const onReset = () => {
    setResult([]);
  };

  return (
    <>
      <ResponseCheckState state={state} message={message} onClickScreen={onClickScreen}/>
      <RenderAverage result={result} onReset={onReset}/>
    </>
  );
});

export default ResponseCheck;