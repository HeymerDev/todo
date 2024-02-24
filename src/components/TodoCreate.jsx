import PropTypes from "prop-types";
import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const hadleSubmitTodo = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <>
      <form
        onSubmit={hadleSubmitTodo}
        className="flex bg-white rounded-md overflow-hidden py-4 gap-4 items-center px-4 dark:bg-gray-800"
      >
        <span className="rounded-full border-2 h-5 w-5 inline-block dark:border-gray-700"></span>
        <input
          type="text"
          placeholder="create a new todo"
          className="w-full text-gray-600 outline-none dark:text-gray-400 dark:bg-gray-800"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </>
  );
};

TodoCreate.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default TodoCreate;
