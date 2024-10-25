import axios from "axios";
import { useState } from "react";

interface ListComponentProps {
  list: { id: number; work: string };
  func: () => void;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ListComponent = ({ list, func }: ListComponentProps) => {
  const [input, setInput] = useState<{ id: number; work: string }>(list);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ id: list.id, work: e.target.value });
  };

  const deleteApi = async (id: number) => {
    await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`);
    func();
  };

  const patchApi = async (id: number, work: string) => {
    const res = await axios.patch(`http://127.0.0.1:8000/api/todos/${id}/`, {
      work,
    });
    if (res) {
      func();
    }
  };

  return (
    <div key={`main_${list?.id}`}>
      <p key={`index_${list?.id}`}>
        {list?.id}. {list?.work}
      </p>
      <p>
        <input type="text" onChange={handleInputChange} value={input?.work} />
        <button
          key={`button_${input?.id}`}
          onClick={() => patchApi(input!.id, input!.work)}
        >
          수정
        </button>
      </p>
      <button key={`delete_${input?.id}`} onClick={() => deleteApi(input!.id)}>
        삭제
      </button>
    </div>
  );
};

export default ListComponent;
