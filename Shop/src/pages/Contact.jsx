import styles from "./Contact.module.css";
import Header from "../components/header/Header";
function Contact() {
  return (
    <>
      <Header />
      <div className={styles.ContainerBox}>
        <div className={styles.container}>
          <h1>Contact Us</h1>
          <p className={styles.description}>
            Have a question, comment, or feedback? We'd love to hear from you!
            Feel free to reach out to us using any of the following methods:
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <i className="fas fa-envelope"></i>
              <span>Email: support@kmbonlineshop.com</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-phone"></i>
              <span>Phone: +1 (123) 456-7890</span>
            </div>
            <div className={styles.infoItem}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Address: 123 Main Street, City, Country</span>
            </div>
          </div>
          <p className={styles.description}>
            Our customer service team is available to assist you during our
            business hours, Monday through Friday, 9:00 AM - 5:00 PM (local
            time). We strive to respond to all inquiries promptly and provide
            you with the best possible support.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
