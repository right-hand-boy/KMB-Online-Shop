import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import styles from "./Paymentsetting.module.css";
import Header from "../../components/header/Header";
function Paymentsetting() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>

      <div className={styles.Paymentsetting}>
        <AccountSettingOptions />
        <div className={styles.paymentSettingPage}>
          <h1>Payment Settings</h1>
          <div className={styles.optionList}>
            <div className={styles.option}>
              <h2>Credit Card</h2>
              <p>•••• •••• •••• 1234</p>
            </div>
            <div className={styles.option}>
              <h2>PayPal</h2>
              <p>example@example.com</p>
            </div>
            <div className={styles.option}>
              <h2>Stripe</h2>
              <p>Connected</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paymentsetting;
