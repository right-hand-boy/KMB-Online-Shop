import styles from "./Dashboard.module.css";
import AccountSettingOptions from "../components/main/AccountSettingOptions";
import Header from "../components/header/Header";
function Dashboard() {
  return (
    <>
      <Header />
      <div className={styles.Dashboard}>
        <AccountSettingOptions />
        <div>Dashboard</div>
      </div>
    </>
  );
}

export default Dashboard;
