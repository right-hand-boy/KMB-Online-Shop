import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import styles from "./SubscriptionSettng.module.css";
import Header from "../../components/header/Header";
import UserDetail from "../../components/main/UserDetail";
function SubscriptionSettng() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>

      <div className={styles.container}>
        <div className={styles.SubscriptionSettng}>
          <AccountSettingOptions />
          <div className={styles.subscriptionSettingPage}>
            <h1>Subscription Settings</h1>
            <div className={styles.optionList}>
              <div className={styles.option}>
                <h2>Subscription Plans</h2>
                <p>Manage available subscription plans</p>
              </div>
              <div className={styles.option}>
                <h2>Subscription Status</h2>
                <p>View and manage subscription status</p>
              </div>
              <div className={styles.option}>
                <h2>Subscription Renewal</h2>
                <p>Configure subscription renewal settings</p>
              </div>
            </div>
          </div>
          <UserDetail />
        </div>
      </div>
    </>
  );
}

export default SubscriptionSettng;
