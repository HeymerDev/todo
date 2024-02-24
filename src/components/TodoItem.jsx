import PropTypes from "prop-types";
import IconCross from "./icons/IconCross";
import CheckIcon from "./icons/CheckIcon";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4 items-center  dark:border-b-gray-700 transition-all duration-1000">
      <button
        onClick={() => updateTodo(id)}
        className={`rounded-full border-2 h-5 w-5 dark:border-gray-700 transition-all duration-1000
        ${
          completed
            ? "bg-gradient-to-r from-cyan-500 to-indigo-600 flex justify-center items-center"
            : "inline-block"
        }
        `}
      >
        {completed && <CheckIcon />}
      </button>

      <p
        className={`text-gray-600 grow ${completed && "line-through"} dark:text-gray-400 transition-all duration-1000`}
      >
        {title}
      </p>
      <button onClick={() => deleteTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
