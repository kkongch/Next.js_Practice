"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ListComponent from "./item";
interface Todo {
  work: string;
}
const Todos = () => {
  const [list, setList] = useState<{ id: number; work: string }[]>([]);
  const [todos, setTodos] = useState("");
  // const [load, setLoad] = useState("");
  const listChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos(e.target.value);
  };
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoad(e.target.value);
  // };
  const clickBtn = () => {
    const data = { work: todos };
    postApi(data);
    console.log("리스트", list);
  };
  const postApi = async (list: Todo) => {
    const res = await axios.post("http://127.0.0.1:8000/api/todos/", list);
    if (res) {
      check();
    }
    console.log(res);
  };
  const check = async () => {
    const data = await getApi();
    console.log("데이터", data.data);
    setList(data.data);
  };
  const getApi = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/todos/");

    return response;
  };

  return (
    <>
      <div style={{ marginBottom: "100px" }}>
        <input
          type="text"
          onChange={listChange}
          style={{ border: "2px solid" }}
        />
        <button onClick={clickBtn} style={{ border: "1px solid " }}>
          다 쓰고 클릭
        </button>
      </div>

      <div>
        {list?.map((item) => (
          <ListComponent list={item} func={check} key={`list_${item.id}`} />
        ))}
      </div>
    </>
  );
};

export default Todos;
