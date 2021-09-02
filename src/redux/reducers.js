import { ADD_TODO, UPDATE_TODO, DELETE_TODO, SET_TODO_DONE } from "./actions";
import todos from "./States";

let reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: todos.length + 1,
          description: action.payload.todo,
          isDone: false
        },
        ...state
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.todoId);
    case UPDATE_TODO:
      const currentTodos = state;
      const todoIndex = state.findIndex(
        (todo) => todo.id === action.payload.todo.id
      );
      currentTodos[todoIndex].description = action.payload.todo.description;
      return currentTodos;
    case SET_TODO_DONE:
      const current = state;
      const stateIndex = state.findIndex(
        (todo) => todo.id === action.payload.todoId
      );
      current[stateIndex].isDone = !current[stateIndex].isDone;
      console.log("current", current);
      return current;
    default:
      return state;
  }
};

export default reducer;