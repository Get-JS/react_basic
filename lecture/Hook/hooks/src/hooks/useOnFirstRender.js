import { useRef } from 'react';

function useOnFirstRender(func) {
  // * 컴포넌트를 처음 호출할 때, 렌더링 되기전에 호출하는 훅스

  console.log('%c ========useOnFirstRender-reading logic========', 'background: #222; color: #c902e2');
  const isFirstRef = useRef(true);
  if (isFirstRef.current) {
    console.log('first-render', isFirstRef.current);
    isFirstRef.current = false;
    func();
  }
}

export default useOnFirstRender;
