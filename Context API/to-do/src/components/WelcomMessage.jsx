
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
const WelcomeMessage = () => {

  const ContextObj = useContext(TodoItemsContext);
  const todoItem = ContextObj.todoItem;
  return (
    todoItem.length === 0 && <p className={styles.Welcome}>Enjoy Your Day!</p>
  );
}
export default WelcomeMessage;