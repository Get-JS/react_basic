import React, { useState } from 'react';
import HookTest from './HookTest';
import CustomHooks from './CustomHooks';

function Hooks() {
  console.log('%c ========Hooks-render========', 'background: #222; color: #bada55');
  const [value, setValue] = useState();
  const [id, setId] = useState(1);
  const [speed, setSpeed] = useState(0);
  const [toogle, setToogle] = useState(false);

  return (
    <div
      style={{
        width: '800px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '6rem',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div>
        <h1>Hooks Practice</h1>
        <p>
          <strong>React.StrictMode(CRA 템플릿 이 설정 되는 방식)</strong>으로 래핑되면 개발시 렌더링이 두 번 호출된다. <br />
          이것은 일부 setState 함수가 순수하지 않을 때 발생할 수있는 버그를 잡기 위해 수행된다.
          <br />
        </p>
        <button onClick={() => setToogle(!toogle)}>toogle</button>
        {toogle ? (
          <div style={{ border: '1px solid' }}>
            <h2>Hooks state management</h2>
            <p>
              rendering을 할 때마다 상탯값을 초기화는것이 아니라, 해당 컴포넌트의 hooks사용을 배열로 정보를 저장해 둔다.
              <br />
              re-rendering을 한 후는 상탯값 초기화를 무시하며 component 안의 로직을 순서대로 읽고, return element를 한 후, useEffect 처럼 rendring 이후의 hook callback(async) 함수를 호출하게 된다.
            </p>
            <button
              onClick={() => {
                setValue('update parent props');
              }}
            >
              click parent value update
            </button>
            <HookTest parentValue={value} />
          </div>
        ) : (
          <div style={{ border: '1px solid' }}>
            <h2>Use CustomHooks</h2>
            <button
              onClick={() => {
                setId(2);
              }}
            >
              Click parent id: 2 update
            </button>
            <button
              onClick={() => {
                setSpeed((state) => state + 1);
              }}
            >
              Click speedUp update
            </button>
            <CustomHooks parentId={id} speed={speed} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hooks;
