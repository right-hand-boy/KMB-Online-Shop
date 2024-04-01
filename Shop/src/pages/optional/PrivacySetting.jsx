import Header from "../components/header/Header";
import styles from "./PrivacySetting.module.css";
import AccountSettingOptions from "../components/main/AccountSettingOptions";
function PrivacySetting() {
  return (
    <>
      <Header />
      <div className={styles.PrivacySetting}>
        <AccountSettingOptions />
        <div>PrivacySetting</div>
      </div>
    </>
  );
}

export default PrivacySetting;
