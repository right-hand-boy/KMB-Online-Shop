import Header from "../components/header/Header";
import styles from "./AccountSettings.module.css";
function AccountSettings() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.AccountSettings}></div>
    </>
  );
}

export default AccountSettings;
