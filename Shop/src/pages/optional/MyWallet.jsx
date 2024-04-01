import styles from "./MyWallet.module.css";
import Header from "../components/header/Header";
import AccountSettingOptions from "../components/main/AccountSettingOptions";
function MyWallet() {
  return (
    <>
      <Header />
      <div className={styles.MyWallet}>
        <AccountSettingOptions />
        <div>wallet</div>
      </div>
    </>
  );
}

export default MyWallet;
