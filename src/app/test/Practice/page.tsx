"use client";
import React, { useState } from "react";

// 자식 컴포넌트
const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child component rendered");
  return <button onClick={onClick}>Click me</button>;
});

Child.displayName = "Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0); // 새로운 상태 추가

  // 매번 새로운 함수가 생성됨
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h1>Other State: {otherState}</h1>
      <button onClick={() => setOtherState(otherState + 1)}>
        Change Other State
      </button>
      <div>
        <Child onClick={handleClick} />
      </div>
    </div>
  );
}

export default Parent;
