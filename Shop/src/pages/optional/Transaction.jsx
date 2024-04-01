import styles from "./Transaction.module.css";
import Header from "../components/header/Header";
import AccountSettingOptions from "../components/main/AccountSettingOptions";
function Transaction() {
  return (
    <>
      <Header />
      <div className={styles.Transaction}>
        <AccountSettingOptions />
        <div>transaction</div>
      </div>
    </>
  );
}

export default Transaction;
