import { useRef } from "react";

function useOnFirstRender(func) {
  console.log("%c ========useOnFirstRender-reading all logic========", "background: #222; color: #c902e2");
  const isFirstRef = useRef(true);
  console.log("first-render", isFirstRef.current);
  if (isFirstRef.current) {
    isFirstRef.current = false;
    func();
  }
}

export default useOnFirstRender;
