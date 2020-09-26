# Hook

- `훅을` 사용하면 **재사용 가능한 로직을 쉽게 만들 수 있다.**
- 또한, **같은 로직을 한곳으로 모을 수 있어서 가독성이 좋다.**
- 클래스형 컴포넌트의 단점인 같은 로직이 `componentDidMount와` `componentDidUpdate` 메서드에 중복으로 들어가는것을 훅으로 해결할 수 있다.

## useState

- `useState를` 사용하여 **함수형 컴포넌트에 상탯값을 부여할 수 있게 되었다.**

```jsx
function InputCustom() {
  const [name, setName] = useStaet(); // * getter, setter 리턴
}
```

- 리액트는 훅이 호출된 순서를 기억해서 활용하므로 여러 개의 훅을 사용해도 문제가 되지 않는다.

> React는 `setState` 함수 **동일성이 안정적이고 리렌더링 시에도 변경되지 않을 것이라는 것을 보장합니다.**
> 이것이 useEffect나 useCallback **의존성 목록에 이 함수를 포함하지 않아도 무방한 이유입니다.**

> 클래스 컴포넌트의 setState 메서드와는 다르게, useState는 **갱신 객체(update objects)를 자동으로 합치지는 않습니다.**

- lazy state

  > `initialState` 인자는 초기 렌더링 시에 사용하는 state입니다. **그 이후의 렌더링 시에는 이 값은 무시됩니다.** 만약 초기 state가 고비용 계산의 결과라면, 초기 렌더링 시에만 실행될 함수를 대신 제공할 수 있습니다.

  - 함수는 렌더링 할 때마다 계속 실행이 되지만, state 값으로 업데이트 하지 않는다.

  ```jsx
  const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
  });
  ```

## useEffect

- `함수형 컴포넌트에서도` 훅을 사용하여 **생명 주기 함수를 이용할 수 있다.**
- `componentDidMount와` `componentDidMount에` 중복된 코드 작성의 단점을 해결할 수 있다.

```jsx
import React, { useState, useEffect } from "react";

function Fcomponent() {
  const [input, setInput] = useState();
  useEffect(() => {
    // * effect;
    return () => {
      // * cleanup;
    };
  }, [input]);

  return <div></div>;
}

export default Fcomponent;
```

- `렌더링이 끝나게 되면` `useEffect를` 실행하게 된다.
- `두번 째 매개변수는` `상탯값 종속이 있다면` 배열 안에 변수명을 기입 해야 한다.
  - `배열 안의 값이 변경되는 경우에만` **해당하는 useEffect가 실행하게 된다.**
- `함수형 컴포넌트는 render()함수가 없기 때문에` **컴포넌트 안에서 작성된 모든 코드를 다시 읽고 리턴을 하게 된다.**

## rules

- 하나의 컴포넌트에서 **훅을 호출하는 순서는 항상 같아야 한다.**
  - `조건에` 따라(if) 훅을 호출하면 순서가 **보장되지 않는다.**
  - `반복문`(for, while) 안에서 훅을 호출하는 것도 순서가 **보장되지 않는다.**
  - `함수` 또한 언제 호출될지 알 수 없기 때문에 마찬가지로 순서가 **보장되지 않는다.**
- `훅은` `함수형 컴포넌트` 또는 `커스텀 훅` 안에서만 호출이되어야 한다.
  - 리액트가 `상탯값을 구분할 수 있는 유일한 정보는` **훅이 사용된 순서이다.**
  - 리액트는 `훅이` `사용된 순서를 저장하고` 배열에 **저장된 순서를 기반으로 훅을 관리한다.**

```jsx
let hooks = null;

// * 리액트가 내장하고 있는 useState, useEffect와 같은 훅이다.
export function useHook() {
  // ...
  // * 각 훅 함수에서는 hooks 배열에 자신의 데이터를 추가한다.
  hooks.push(hooksData);
}

// * 렌더링 과정에서 하나의 컴포넌트를 처리하는 함수
function process_a_component_rendering(component) {
  hooks = [];
  component(); // * 컴포넌트 내부에서 훅을 사용한 만큼 hooks 배열에 데이터가 추가된다.
  let hooksForThisComponent = hooks; // * 생성된 배열을 저장
  hooks = null; // * hooks 초기화
  // ....
}
```

## useContext

- `Consumer` 컴포넌트를 `사용하지 않고도` 부모 컴포넌트로부터 전달된 **콘텍스트 데이터를 사용할 수 있다.**

```jsx
import React, { useContext } from "react";

function Fcomponent() {
  const user = useContext(UserContext);
  console.log("user:", user.name, user.age);
}
```

## useRef

- 클래스 컴포넌트에서 `createRef` 함수를 통해서 **돔 요소에 접근했다면**, 함수형 컴포넌트에서는 `useRef` 훅을 통해서 **돔 요소에 접근할 수 있다.**
- `클래스형 컴포넌트에서는` `렌더링과 무관한 값을` **멤버 변수에 저장했다.**
  - `함수형 컴포넌트는` `인스턴스로 생성되지 않기 때문에` 사용된 컴포넌트의 **고유한 값을 저장할 방법이 없었다.**
  - `useRef` 훅을 이용하면 함수형 컴포넌트도 **마치 멤버 변수가 있는 것처럼 만들 수 있다.**
  - `useRef로` 이용한 변수는 `값이 바뀌더라도 `**렌더링이 되지 않는다.**

```jsx
import React, { useContext, useRef } from "react";

function Fcomponent() {
  const preAgeRef = useRef();
  const user = useContext(UserContext);
  console.log("user:", user.name, user.age);
}
```

## useMemo

```jsx
useMemo(() => function, [])
```

- `useMemo` 훅은 계산량이 많은 **함수의 반환값을 재활용 하는 용도로 사용된다.**
- 첫 번째 매개변수는 함수를 입력하고, 두 번째 매개변수는 배열의 값으로 배열 안에 값이 변경되지 않으면 이전에 반환된 값을 재사용 한다.

## useCallback

```jsx
useCallback(() => {
  callback;
}, []);
```

- 리액트의 `렌더링 성능을 위해` 제공되는 훅이다.
- 훅을 사용하게 되면서 컴포넌트가 `렌더링될 때마다 함수를 생성해서` **자식 컴포넌트의 속성값으로 입력하는 경우가 많다.**
  - 속성값이 매번 변경되기 때문에 컴포넌트에서 `PureComponent나 React.memo를 사용해도` **불필요한 렌더링이 발생하는 문제점이 있다.**
- `useCallback` 함수로 합수 재정의를 덜 할수있게 도와준다.

## useReducer

- `useReducer` 훅을 사용하면 컴포넌트의 상탯값을 리덕스의 **리듀서처럼 관리할 수 있다.**
- useReducer 훅의 매개변수로 앞에서 작성한 리듀서와 초기 상탯값을 입력한다.
- useReducer 훅은 상탯값과 dispatch 함수를 차례대로 반환된다.

```jsx
import React, { useReducer } from "react";

const INITIA_STATE = { name: 'empty'. age: 0};
function reducer(state, action) {
  swtich(action.type) {
    case 'setName':
      return {...state, name: action.name};
    case 'setAge':
      return {...state, age: action.age};
    default:
      return state;
  }
}
function Fcomponent() {
  const [state, dispatch] = useReducer(reducer, INITIA_STATE);
  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={e =>
          dispatch({type: 'setName', name: e.currentTarget.value})
        }
      />
    </div>
  );
}

export default Fcomponent;

```

## useImperativeHandle

- `클래스형 컴포넌트의` 부모 컴포넌트는 `ref 객체를 통해` **자식 컴포넌트의 메서드를 호출 할 수 있었다.**
- `useImperativeHandle` 훅을 이용하면 마치 **함수형 컴포넌트에도 메서드가 있는 것 처럼 만들 수 있다.**

```jsx
import React, { forwardRef, useState, useImperativeHandle } from "react";

function Fcomponent(props, ref) {
  const [name, setName] = useState();
  useImperativeHandle(ref, () => {
    getNameLength: () => name.length,
  }, [input]);
  return(<>{*....*}</>);
}

export default forwardRef(Fcomponent;)
```

```jsx
import React from "react";

function use() {
  const chRef = useRef();
  const handleClick = () => {
    console.log("current name length", chRef.cuurent.getNameLenght());
  };
  return (
    <div>
      <Fcomponent ref={chRef} />
    </div>
  );
}

export default use;
```

## useLayoutEffect

- `useEffect` 훅에 입력된 함수는 렌더링 결과가 **돔에 반영된 후 비동기로 호출된다.**
- `useLayoutEffect` 훅은 useEffect 훅과 거의 비슷하게 동작하지만 **동기로 호출된다는 점이 다르다.**
- `componentDidMount와` `componentDidUpdate` 메서드도 렌더링 결과가 돔에 반영된 직후에 **동기로 호출되므로**, 훅으로 포팅한다면 useEffect 보다는 useLayoutEffect을 사용하는게 더 안전하다.
- `useLayoutEffect` 훅에 입력한 함수에서 **연산을 많이 하면 브라우저가 먹통이 될 수 있으므로 주의해야 한다.**
- 렌더링 직후 `돔 요소의 값을 읽는 경우에는` `useLayoutEffect` 훅을 사용하는 것이 적합하다.

## useOnFirstRender like constructor (customHook)

```jsx
import React, { useRef } from "react";

function useOnFirstRender(func) {
  const isFirstRef = useRef(true);
  if (isFirstRef.current) {
    isFirstRef.current = false;
    func();
  }
}

export default useOnFirstRender;
```

## usePrevious, useOnUpdate (customHook)

- componentDidUpdate 기능을 수행하기 위해서는 `useEffect` 훅은 `최초 렌더링 후에도 호출 되므로` 이를 피하기 위해 **useRef 훅을 이용한다.**

```jsx
import React from "react";

function usePrevious(value) {
  const valueRef = useRef();
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  return valueRef.current;
}

export default usePrevious;
```

```jsx
function Test(props) {
  const [name, setName] = useState(props.name);
  const prevUserId = usePrevious(props.userId);
  const isMountRef = useRef(false);
  useEffect(() => {
    if (isMountRef.current) {
      if (prevUserId !== props.userId) {
        setName(props.name);
      }
    } else {
      isMountRef.current = true;
    }
  });
}
```

- 이러한 update가 자주 사용한다면 커스텀으로 만들 수 있다.

```jsx
function useOnUpdate(func) {
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (isMountedRef.current) {
      func();
    } else {
      isMountedRef.current = true;
    }
  });
}
```

## forceUpdate (customHook)

```jsx
function Fcomponent() {
  const [_, forceUpdate] = useReducer((s) => s + 1, 0);
}
```

- `useReducer` 훅을 이용해서 `forceUpdate` 메서드를 구현한 코드다.
- forceUpdate 함수를 호출하면 상탯값이 항상 변경되므로 클래스형 컴포넌트의 forceUpdate 메서드처럼 동작한다.

## useHasMounted (customHook)

```jsx
import React from "react";

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);
  return hasMounted;
}

export default useHasMounted;
```

## useDebounce (customHook)

```jsx
function useDebounce({ callback, ms, args }) {
  useEffect(() => {
    const id = setTimeout(callback, ms);
    return () => clearTimeout(id);
  }, args);
}

function Debounce({ children, ...props }) {
  useDebounce(props);
  return children;
}
```
