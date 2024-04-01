import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import styles from "./NotificationSetting.module.css";
import Header from "../../components/header/Header";
import UserDetail from "../../components/main/UserDetail";

function NotificationSetting() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.NotificationSetting}>
        <AccountSettingOptions />
        <div className="notification-setting-page">
          <h1>Notification Settings</h1>
          <div className="option">
            <input
              type="checkbox"
              id="orderUpdates"
              name="orderUpdates"
              checked
            />
            <label htmlFor="orderUpdates">Order Updates</label>
          </div>
          <div className="option">
            <input type="checkbox" id="promotions" name="promotions" />
            <label htmlFor="promotions">Promotions</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="productAvailability"
              name="productAvailability"
              checked
            />
            <label htmlFor="productAvailability">Product Availability</label>
          </div>
        </div>
        <UserDetail />
      </div>
    </>
  );
}

export default NotificationSetting;
