import { Droppable, Draggable } from "@hello-pangea/dnd";

import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <Droppable droppableId="todos">
      {(dropProvider) => (
        <div
          ref={dropProvider.innerRef}
          {...dropProvider.droppableProps}
          className="bg-white rounded-t-md mt-8 dark:bg-gray-800 transition-all duration-1000"
        >
          {todos.map((todo, i) => (
            <Draggable key={todo.id} draggableId={`${todo.id}`} index={i}>
              {(dragProvider) => (
                <TodoItem
                  ref={dragProvider.innerRef}
                  {...dragProvider.draggableProps}
                  {...dragProvider.dragHandleProps}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
              )}
            </Draggable>
          ))}

          {dropProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoList;
