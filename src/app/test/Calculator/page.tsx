"use client";

import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, change, reset } from "@/store/cal";
import { useAppSelector } from "@/hooks/hooks";
import { ChangeEvent } from "react";
import axios from "axios";
// interface StateType {
//   user: {
//     number: number;
//   };
// input에서 숫자를 입력하면 number가 바뀌게
const Calculator = () => {
  const dispatch = useDispatch();
  //   const checkState = useSelector((state: StateType) => state);
  const number = useAppSelector((state) => state.user.number);
  const onClickChange = (e: any) => {
    const num = +e.target.value;
    dispatch(change(num));
  };
  const onClick_increase = () => {
    dispatch(increase());
    // console.log("state가 머에요 : ", checkState);
  };
  const onClickReset = () => dispatch(reset());
  const onClick_decrease = () => dispatch(decrease());

  return (
    <div>
      <p>숫자는 : {number}</p>
      <button onClick={onClick_increase} style={{ marginRight: "3rem" }}>
        증가 버튼
      </button>
      <button onClick={onClick_decrease}>감소 버튼</button>
      <button onClick={onClickReset}>집에 갈게요</button>
      <input
        type="number"
        placeholder="숫자를 입력하세요"
        onChange={onClickChange}
      />
    </div>
  );
};

export default Calculator;
