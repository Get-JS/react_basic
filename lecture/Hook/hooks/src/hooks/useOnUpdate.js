import { useEffect, useRef } from 'react';

function useOnUpdate(func) {
  // * 렌더링 업데이트 될 때마다 실행

  console.log('%c ========useOnUpdate-reading logic========', 'background: #222; color: #bada55');
  const isMountedRef = useRef(false);
  useEffect(() => {
    console.log('%c ========useOnUpdate-rendering-finish========', 'background: #222; color: #e67e22');
    if (isMountedRef.current) {
      console.log('isMountedUpdate');
      func();
    } else {
      console.log('isMounted');
      isMountedRef.current = true;
    }
  });
}

export default useOnUpdate;
