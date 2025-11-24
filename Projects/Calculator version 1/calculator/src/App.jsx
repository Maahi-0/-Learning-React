import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsConatiner";

function App() {

  return (<center>
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  </center>
  );
}

export default App