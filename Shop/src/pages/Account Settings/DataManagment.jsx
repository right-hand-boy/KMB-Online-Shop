import AccountSettingOptions from "../../components/main/AccountSettingOptions";
import Header from "../../components/header/Header";
import styles from "./DataManagment.module.css";
import UserDetail from "../../components/main/UserDetail";
function DataManagment() {
  return (
    <div>
      <div className={styles.headerBox}>
        <Header />
      </div>
      <div className={styles.DataManagment}>
        <AccountSettingOptions />
        <div className={styles.dataManagementPage}>
          <h1>Data Management</h1>
          <div className={styles.optionList}>
            <div className={styles.option}>
              <h2>Product Data</h2>
              <p>Manage product information and inventory</p>
            </div>
            <div className={styles.option}>
              <h2>Customer Data</h2>
              <p>Manage customer information and accounts</p>
            </div>
            <div className={styles.option}>
              <h2>Order Data</h2>
              <p>View and manage order information and history</p>
            </div>
          </div>
        </div>
        <UserDetail />
      </div>
    </div>
  );
}

export default DataManagment;
