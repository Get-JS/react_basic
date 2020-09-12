import React, { useState, useEffect } from "react";

function HookTest(props) {
  console.log("%c ========HookTest-render-reading all logic========","background: #222; color: #bada55");
  const { parentValue } = props;
  readFunction();
  const [value, setValue] = useState(() => {
    console.log("%c ========HookTest-init-state-value========","background: #222; color: #3498db");
    return getRandom();
  });
  const [functionRead] = useState(() => {
    console.log("%c ========HookTest-init-state-functionRead========", "background: #222; color: #3498db");
    return getRandom();
  });

  useEffect(() => {
    console.log("%c ========HookTest-rendering-finish========", "background: #222; color: #e67e22");
    console.log("HookTest-value", value);
    console.log("HookTest-functionRead", functionRead);
  });

  useEffect(() => {
    console.log("%c ========HookTest-order-insure-update-state:value-props:parentValue========", "background: #222; color: #e67e22");
    console.log("HookTest-parentValue", parentValue);
    if (parentValue && parentValue !== value) setValue(parentValue);
  }, [parentValue, value]);

  return (
    <div>
      value : {value} <br />
      functionRead : {functionRead} <br />
      <button onClick={() => setValue("value is Updated!!")}>
        click Value update
      </button>
    </div>
  );
}

function readFunction() {
  console.log("%c ========HookTest-in-logic-readFunction========", "background: #222; color: #1abc9c");
}

function getRandom() {
  const value = parseInt(Math.random() * 10);
  console.log("getRandom", value);
  return value;
}

export default HookTest;
