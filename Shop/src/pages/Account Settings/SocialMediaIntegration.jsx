import styles from "./SocialMediaIntegration.module.css";
import Header from "../../components/header/Header";
import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import UserDetail from "../../components/main/UserDetail";
function SocialMediaIntegration() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.SocialMediaIntegration}>
        <AccountSettingOptions />
        <div className={styles.socialMediaIntegrationPage}>
          <h1>Social Media Integration</h1>
          <div className={styles.socialMediaList}>
            <div className={styles.socialMediaOption}>
              <h2>Facebook</h2>
              <p>Integrate with Facebook for social sharing</p>
            </div>
            <div className={styles.socialMediaOption}>
              <h2>Twitter</h2>
              <p>Integrate with Twitter for social sharing</p>
            </div>
            <div className={styles.socialMediaOption}>
              <h2>Instagram</h2>
              <p>Integrate with Instagram for social sharing</p>
            </div>
          </div>
        </div>
        <UserDetail />
      </div>
    </>
  );
}

export default SocialMediaIntegration;
