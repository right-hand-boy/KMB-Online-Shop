import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import styles from "./FeedbackPreferences.module.css";
import Header from "../../components/header/Header";
import UserDetail from "../../components/main/UserDetail";
function FeedbackPreferences() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.FeedbackPreferences}>
        <AccountSettingOptions />
        <div className={styles.feedbackPreferencePage}>
          <h1>Feedback Preferences</h1>
          <div className={styles.preferenceList}>
            <div className={styles.preferenceOption}>
              <h2>Email Notifications</h2>
              <p>Receive feedback notifications via email</p>
            </div>
            <div className={styles.preferenceOption}>
              <h2>Feedback Forms</h2>
              <p>Allow customers to submit feedback via forms</p>
            </div>
            <div className={styles.preferenceOption}>
              <h2>Rating System</h2>
              <p>Enable rating system for customer feedback</p>
            </div>
          </div>
        </div>
        <UserDetail />
      </div>
    </>
  );
}

export default FeedbackPreferences;
