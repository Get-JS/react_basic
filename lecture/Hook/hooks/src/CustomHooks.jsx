import React, { useState, useEffect, useRef, useReducer, useCallback } from 'react';
import useOnFirstRender from './hooks/useOnFirstRender';
import usePrevious from './hooks/usePrevious';
import useOnUpdate from './hooks/useOnUpdate';
import useDebounce from './hooks/useDebounce';

function CustomHooks(props) {
  console.group('%c ========CustomHooks-reading logic========', 'background: #222; color: #fada10');
  const { parentId, speed } = props;

  const isMountedRef = useRef(false);
  const [, forceUpdate] = useReducer((s) => 1, 0);
  const prevParentId = usePrevious(parentId);

  const [parentStatus, setParentStatus] = useState('init-parentId');
  const [name, setName] = useState('init-name');
  const [isFaster, setIsFaster] = useState(false);
  const [prevSpeed, setPrevSpeed] = useState(INIT_SPEED);

  const debounceCallback = useCallback(() => {
    console.log('useDebounce-callback');
    setName('useDebounce-end');
  }, []);

  useDebounce({
    callback: debounceCallback,
    ms: 1000,
    args: [],
  });

  useOnFirstRender(() => {
    console.log('CustomHooks-useOnFirstRender-callback => prev-componentDidMount-like-constructor');
  });

  useOnUpdate(() => {
    console.log('CustomHooks-useOnUpdate-callback => no mounted, mountedUpdate');
  });

  if (speed !== prevSpeed) {
    // * 렌더링 과정에서 바로 상탯값을 변경한다.
    // * 리액트는 렌더 함수에서 상탯값을 변경하면 변경된 상탯값으로 렌더 함수를 다시 호출한다.
    // * getDerivedStateFromProps 정적 메서드를 사용한 방법보다는 조금 비효율적인 측면이 있다.
    // * 하지만, 돔을 변경하기 전에 발생하는 연산이므로 성능에 크게 영향을 주지 않는다.
    console.log('%c ========CustomHooks-getDerivedStateFromProps========', 'background: #222; color: orange');
    setIsFaster(speed > prevSpeed);
    setPrevSpeed(speed);
  }

  console.log('CustomHooks-reading read logic');

  useEffect(() => {
    console.log('%c ========CustomHooks-rendering-finish========', 'background: #222; color: #fada10');
  });

  useEffect(() => {
    // * usePrevious(parentId)
    // * 이전 props, 현재 props를 비교
    console.log('prevParentId', prevParentId);
    console.log('parentId', parentId);
  }, [prevParentId, parentId]);

  useEffect(() => {
    // * isMountedRef
    // * 마운트 업데이트 상태에서 이전 props와 현재 props를 비교해서 side effect
    if (isMountedRef.current) {
      console.log('isMountedUpdate');
      if (prevParentId !== parentId) setParentStatus('parentId update');
    } else {
      console.log('isMounted');
      isMountedRef.current = true;
    }
  }, [setParentStatus, prevParentId, parentId]);

  return (
    <div>
      parentStatus : {parentStatus} <br />
      <button onClick={forceUpdate}>force update</button>
      <br />
      <button onClick={() => setName('init-update')}>name update</button>
      <button onClick={() => setName('init-name')}>name init</button>
      &nbsp;name: {name} <br />
      isFaster: {isFaster ? 'fsst' : 'no'}
    </div>
  );
}

const INIT_SPEED = 0;
export default CustomHooks;
