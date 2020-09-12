import { useEffect, useRef } from "react";

function usePrevious(value) {
  console.log("%c ========usePrevious-reading all logic========", "background: #222; color: pink");
  const valueRef = useRef();
  useEffect(() => {
    console.log("%c ========usePrevious-rendering-finish========", "background: #222; color: pink");
    valueRef.current = value;
    console.log('usePrevious', valueRef.current);
  }, [value]);
  return valueRef.current;
}

export default usePrevious;
