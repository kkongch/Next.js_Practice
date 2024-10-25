"use client";

import { useMemo, useState } from "react";

interface StateType {
  value1: number | undefined;
  value2: number | undefined;
}
const Practice = () => {
  const [value, setValue] = useState<StateType>({
    value1: undefined,
    value2: undefined,
  });
  const [result, setResult] = useState<number>(0);

  //   const calculater = useMemo(() => {
  //     console.log("계산결과는?", value1 + value2);
  //     return setResult(value1 + value2);
  //   }, [[value1, value2]]);
  const inputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev: StateType) => ({
      ...prev,
      [name]: value === "" ? undefined : Number(value),
    }));
    if (value !== "" && isNaN(Number(value))) {
      alert("숫자만 입력하세요");
      return;
    }
    if (value === "") {
      setValue((prev: StateType) => ({ ...prev, [value]: undefined }));
      return;
    } else {
      setValue((prev: StateType) => ({ ...prev, [value]: value }));
    }
    console.log("input value changed", e.target.value);
  };
  const changeResult = useMemo(() => {
    if (value.value1 === undefined || value.value2 === undefined) {
      return 0;
    }

    setResult(value.value1 + value.value2);
    return result;
  }, [value.value1, value.value2]);

  //   const changeResult = () => {
  //     if (value.value1 === undefined || value.value2 === undefined) {
  //       alert("값1,2를 모두 입력하세요");
  //       return;
  //     }
  //     setResult(value.value1 + value.value2);
  //     console.log("result changed", result);
  //   };
  return (
    <>
      <input
        type="text"
        name="value1"
        value={value.value1 !== undefined ? value.value1 : ""}
        onChange={inputValueChange}
        // placeholder="value1"
      />
      <input
        type="text"
        name="value2"
        value={value.value2 !== undefined ? value.value2 : ""}
        onChange={inputValueChange}
        // placeholder="value1"
      />
      {/* <button
        title="여기를 눌러주세요"
        onClick={changeResult}
        style={{ border: "1px solid" }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "green")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
      >
        ㅎㅎ
      </button> */}
      <div>{changeResult}</div>
    </>
  );
};

export default Practice;
