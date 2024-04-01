import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import styles from "./OrderSetting.module.css";
import Header from "../../components/header/Header";
import UserDetail from "../../components/main/UserDetail";
function OrderSetting() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.OrderSetting}>
        <AccountSettingOptions />
        <div className={styles.orderSettingPage}>
          <h1>Order Settings</h1>
          <div className={styles.optionList}>
            <div className={styles.option}>
              <h2>Order Tracking</h2>
              <p>Enable order tracking for customers</p>
            </div>
            <div className={styles.option}>
              <h2>Order History</h2>
              <p>Show order history for customers</p>
            </div>
            <div className={styles.option}>
              <h2>Order Notifications</h2>
              <p>Send order notifications to customers</p>
            </div>
          </div>
        </div>
        <UserDetail />
      </div>
    </>
  );
}

export default OrderSetting;
