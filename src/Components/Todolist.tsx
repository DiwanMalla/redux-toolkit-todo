/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useDispatch, useSelector } from "react-redux";
import { edit, remove, toggle } from "../Store/TodoSlice";
import { FaTrash } from "react-icons/fa6";

import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Todolist = () => {
  //@ts-expect-error
  const todos = useSelector((state) => state.todo);
  const [editingId, setEditingId] = useState<string | null>();
  const [newTitle, setNewTitle] = useState();
  const dispatch = useDispatch();

  //@ts-expect-error
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  //@ts-expect-error
  const handleToggle = (id) => {
    dispatch(toggle(id));
  };

  //@ts-expect-error
  const handleEdit = (id) => {
    setEditingId(id);
    //@ts-expect-error
    const todo = todos.find((item) => item.id === id);
    if (todo) {
      setNewTitle(todo.title);
    }
  };
  //@ts-expect-error
  const handleSave = (id) => {
    dispatch(edit({ id, title: newTitle }));
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };
  return (
    <div>
      {
        //@ts-expect-error
        todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between p-2"
            style={{ background: todo.completed ? "#89fb74" : "white" }}
          >
            <div className="flex gap-3">
              <input type="checkbox" onChange={() => handleToggle(todo.id)} />
              {editingId === todo.id ? (
                <div>
                  <input
                    type="text"
                    value={newTitle}
                    //@ts-expect-error
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
              ) : (
                <div className="p-1">{todo.title}</div>
              )}
            </div>
            {editingId === todo.id ? (
              <div className="flex gap-2">
                <div>
                  <button
                    className="bg-red-600 text-white p-1 rounded-md text-sm"
                    onClick={() => handleSave(todo.id)}
                  >
                    <FaSave />
                  </button>
                </div>
                <div>
                  <button
                    className="bg-red-600 text-white p-1 rounded-md text-sm"
                    onClick={handleCancel}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <div>
                  <button
                    className="bg-red-600 text-white p-1 rounded-md text-sm"
                    onClick={() => handleEdit(todo.id)}
                  >
                    <FaEdit />
                  </button>
                </div>
                <div>
                  <button
                    className="bg-red-600 text-white p-1 rounded-md text-sm"
                    onClick={() => handleRemove(todo.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      }
    </div>
  );
};

export default Todolist;
