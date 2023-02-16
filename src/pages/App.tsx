import logo from "assets/logo.svg";
import { Parent } from "components/Parent/Parent";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Rerender PlayGround</h1>
      </header>
      <div>
        <Parent />
      </div>
    </div>
  );
}

export default App;
