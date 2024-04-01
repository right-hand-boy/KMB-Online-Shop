import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import Header from "../../components/header/Header";
import styles from "./ContactInformation.module.css";
function ContactInformation() {
  return (
    <>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.ContactInformation}>
        <AccountSettingOptions />
        <div className={styles.contactInfoPage}>
          <h1>Contact Information</h1>
          <div className={styles.optionList}>
            <div className={styles.option}>
              <h2>Email</h2>
              <p>example@example.com</p>
            </div>
            <div className={styles.option}>
              <h2>Phone</h2>
              <p>+1234567890</p>
            </div>
            <div className={styles.option}>
              <h2>Address</h2>
              <p>123 Main St, City, Country</p>
            </div>
            <div className={styles.option}>
              <h2>Social Media</h2>
              <p>Follow us on Facebook, Twitter, Instagram</p>
            </div>
            <div className={styles.option}>
              <h2>Chat Support</h2>
              <p>Live chat available during business hours</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInformation;
