import React, { useState, useEffect, useRef, useReducer, useCallback } from "react";
import useOnFirstRender from "./hooks/useOnFirstRender";
import usePrevious from "./hooks/usePrevious";
import useOnUpdate from "./hooks/useOnUpdate";
import useDebounce from "./hooks/useDebounce";

function CustomHooks(props) {
  console.log("%c ========CustomHooks-reading all logic========","background: #222; color: #fada10");

  const { parentId, speed } = props;
  const [value, setValue] = useState("init-value");
  const [name, setName] = useState("init-name");

  const [isForceUpdate] = useState(false);
  
  const [isFaster, setIsFaster] = useState(false);
  const [prevSpeed, setPrevSpeed] = useState(0);

  const [_, forceUpdate] = useReducer((s) => s + 1, 0);
  const prevUserId = usePrevious(parentId);
  const isMountedRef = useRef(false);

  const callback = useCallback(() => {
    console.log("useDebounce-callback");
    setName("useDebounce-end");
  },[]);

  useDebounce({
    callback,
    ms: 1000,
    args: [name]
  });

  useOnFirstRender(() => {
    console.log("CustomHooks-useOnFirstRender-callback => prev-componentDidMount-like-constructor");
  });

  if (speed !== prevSpeed) {
    // * 렌더링 과정에서 바로 상탯값을 변경한다.
    // * 리액트는 렌더 함수에서 상탯값을 변경하면 변경된 상탯값으로 렌더 함수를 다시 호출한다.
    // * getDerivedStateFromProps 정적 메서드를 사용한 방법보다는 조금 비효율적인 측면이 있다.
    // * 하지만, 돔을 변경하기 전에 발생하는 연산이므로 성는에 크게 영향을 주지 않는다.
    console.log("%c ========CustomHooks-getDerivedStateFromProps========","background: #222; color: orange");
    setIsFaster(speed > prevSpeed);
    setPrevSpeed(speed);
  }

  useOnUpdate(() => {
    console.log("CustomHooks-useOnUpdate-callback => no mounted, mountedUpdate");
  });

  console.log("no matter what setState, read all logic");

  useEffect(() => {
    console.log("%c ========CustomHooks-rendering-finish========","background: #222; color: skyblue");
    console.log("prevUserId", prevUserId, parentId);
    if (isMountedRef.current) {
      console.log("isMountedUpdate");
      if (prevUserId !== parentId) setValue("parentId update");
    } else {
      console.log("isMounted");
      isMountedRef.current = true;
    }
  },[prevUserId, parentId]);

  return (
    <div>
      value : {value} <br />
      <button onClick={() => forceUpdate()}>click force update</button>
      <button onClick={() => setName("init-name")}>click name init</button>
      name: {name} <br />
      isForceUpdate: {isForceUpdate} <br />
      isFaster: {isFaster ? "fsst" : "no"}
    </div>
  );
}

export default CustomHooks;
