import { useEffect, useState } from "react";

function useHasMounted() {
  console.log("%c ========useOnUpdate-render-reading all logic========", "background: #222; color: #bada55");
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    console.log("========isMounted========");
    setHasMounted(true)
  }, []);
  return hasMounted;
}

export default useHasMounted;
