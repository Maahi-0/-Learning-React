import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItem: [],
  addnewItem: () => { },
  deleteItem: () => { },
});

const todoItemsReducer = (currentTodoItems, action) => {

  let newtodoitemmm = currentTodoItems;
  if (action.type === "new_itme") {
    newtodoitemmm = [...currentTodoItems, {
      name: action.payload.itemName,
      dueDate: action.payload.itemDueDate

    }];
  } else if (action.type === "delete_item") {
    newtodoitemmm = currentTodoItems.filter(item => item.name !== action.payload.itemName);
  }
  return newtodoitemmm;
};

const TodoItemsContextProvider = ({ children }) => {


  const [todoItem, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addnewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "new_itme",
      payload: {
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);

  }

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "delete_item",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItem,
        addnewItem,
        deleteItem,
      }}>{children}</TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;