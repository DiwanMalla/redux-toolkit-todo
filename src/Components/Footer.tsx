/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux";

const Footer = () => {
  //@ts-expect-error
  const todos = useSelector((state) => state.todo);
  let completed = 0;
  todos.map((todo: { completed: boolean }) => {
    todo.completed === true ? completed++ : completed;
  });
  return (
    <div>
      <div className="text-2xl mt-3">{`Total completed Items: ${completed}`}</div>
      <div className="text-center text-2xl">
        Developed by <span className="font-bold">Diwan Malla</span>
      </div>
    </div>
  );
};

export default Footer;
