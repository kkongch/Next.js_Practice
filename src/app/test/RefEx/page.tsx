"use client";
import { useRef, useState } from "react";

const RefEx = () => {
  const ref = useRef(0);
  const [state, setState] = useState(0);
  const refBtnClick = () => {
    ref.current += 1;
  };
  const stateBtnClick = () => {
    setState(state + 1);
  };
  return (
    <>
      <button onClick={refBtnClick}>{"Ref버튼"}</button>
      <button onClick={stateBtnClick}>{"State버튼"}</button>
      <p>{`ref버튼으로 누른 횟수 : ${ref.current}`}</p>
      <p>{`state버튼으로 누른 횟수 : ${state}`}</p>
    </>
  );
};

export default RefEx;
