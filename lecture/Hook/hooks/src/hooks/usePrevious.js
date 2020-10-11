import { useEffect, useRef } from 'react';

function usePrevious(value) {
  // * valueRef 내장 되고 단지 값만 리턴하는 형식
  // * 값이 바뀌게 되면 해당 훅스를 사용하는 컴포넌트에는 변화를 알 수 없다.

  console.log('%c ========usePrevious-reading logic========', 'background: #222; color: pink');
  const valueRef = useRef();
  useEffect(() => {
    console.log('%c ========usePrevious-rendering-finish========', 'background: #222; color: pink');
    valueRef.current = value;
    console.log('usePrevious', valueRef.current);
  }, [value]);
  return valueRef.current;
}

export default usePrevious;
