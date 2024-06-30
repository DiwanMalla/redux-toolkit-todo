/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useDispatch, useSelector } from "react-redux";
import { remove, toggle } from "../Store/TodoSlice";

const Todolist = () => {
  //@ts-expect-error
  const todos = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  //@ts-expect-error
  const handleRemove = (item) => {
    dispatch(remove(item));
  };
  //@ts-expect-error
  const handleToggle = (id) => {
    dispatch(toggle(id));
  };
  return (
    <div>
      {
        //@ts-expect-error
        todos.map((todo) => (
          <div
            id={todo.id}
            className="flex justify-between p-2"
            style={{ background: todo.completed ? "#89fb74" : "white" }}
          >
            <div className="flex gap-3">
              <input type="checkbox" onChange={() => handleToggle(todo.id)} />
              <div className="p-1">{todo.title}</div>
            </div>
            <div>
              <button
                className="bg-red-600 text-white p-1 rounded-md text-sm"
                onClick={() => handleRemove(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Todolist;
