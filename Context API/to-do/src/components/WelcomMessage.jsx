
import styles from "./WelcomeMessage.module.css"
const WelcomeMessage = ({ todoItem }) => {

  return (
    todoItem.length === 0 && <p className={styles.Welcome}>Enjoy Your Day!</p>
  );
}
export default WelcomeMessage;