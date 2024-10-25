"use client";
import React, { useRef } from "react";
import { Stage, Layer, Rect } from "react-konva";
import dynamic from "next/dynamic";

const MyRect = () => {
  const rectRef = useRef(null);

  const handleClick = () => {
    // ref로 Konva 객체에 직접 접근하여 속성을 변경
    rectRef!.current.to({
      fill: "red", // 색상 변경
      duration: 0.5, // 애니메이션 적용
      //   colorKey: "white",
    });
    // console.log("ref는? : ", rectRef.current.attrs);
  };

  return (
    <>
      <Stage width={100} height={100}>
        <Layer>
          <Rect
            ref={rectRef} // ref를 통해 Rect 객체에 직접 접근
            x={20}
            y={20}
            width={100}
            height={100}
            fill="green"
            draggable
          />
        </Layer>
      </Stage>
      <button onClick={handleClick}>Change Color</button>
    </>
  );
};

export default MyRect;
