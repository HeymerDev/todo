import PropTypes from "prop-types";

const TodoFilter = ({ handleFilter, filter }) => {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4 dark:bg-gray-800 transition-all duration-1000">
        <button
          className={`${filter === "all" ? "text-blue-300 hover:text-gray-600" : "text-gray-600 hover:text-blue-300"} transition-all`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`${filter === "active" ? "text-blue-300 hover:text-gray-600" : "text-gray-600 hover:text-blue-300"} transition-all `}
          onClick={() => handleFilter("active")}
        >
          Active
        </button>
        <button
          className={`${filter === "completed" ? "text-blue-300 hover:text-gray-600" : "text-gray-600 hover:text-blue-300"} transition-all`}
          onClick={() => handleFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

TodoFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodoFilter;
