"use client";

import React, { useState, useCallback } from "react";

// 자식 컴포넌트
const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("Child component rendered");
  return <button onClick={onClick}>Click me</button>;
});

Child.displayName = "Child";
function Parent() {
  const [count, setCount] = useState(0);

  // useCallback으로 handleClick을 메모이제이션하여 동일한 참조 유지
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // 빈 배열을 넣어서 함수 참조가 유지되도록 설정

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
