import PropTypes from "prop-types";

const TodoComputed = ({ itemsLeft, clearCompleted }) => {
  return (
    <section className="px-4 py-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800">
      <span className="text-gray-500 dark:text-gray-400">
        {itemsLeft} items left
      </span>
      <button
        className="text-gray-500 dark:text-gray-400"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </section>
  );
};

TodoComputed.propTypes = {
  itemsLeft: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

export default TodoComputed;
