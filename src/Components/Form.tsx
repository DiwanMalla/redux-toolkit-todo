/* eslint-disable @typescript-eslint/ban-ts-comment */
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { add } from "../Store/TodoSlice";
import { useDispatch } from "react-redux";
const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  //@ts-expect-error
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(add({ id: uuidv4(), title: input, completed: false }));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          className="border border-gray-200 rounded-md p-1"
          placeholder="Add todo..."
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-500 p-1 rounded-lg m-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
