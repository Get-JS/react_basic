import { useEffect } from 'react';

function useDebounce({ callback, ms }) {
  console.log('%c ========useDebounce-reading logic========', 'background: #222; color: red');

  useEffect(() => {
    console.log('%c ========useDebounce-rendering-finish========', 'background: #222; color: red');
    const id = setTimeout(callback, ms);
    return () => clearTimeout(id);
  }, [callback, ms]);
}

export default useDebounce;
