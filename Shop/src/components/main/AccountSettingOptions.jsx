import styles from "./AccountSettingOptions.module.css";
import { NavLink } from "react-router-dom";
function AccountSettingOptions() {
  return (
    <nav className={styles.accountSettingOption}>
      {/* <NavLink to="/user/accountSetting/profile">Profile information</NavLink>
      <NavLink to="/user/accountSetting/dashboard">Dashboard</NavLink>
      <NavLink to="/user/accountSetting/mywallet">my wallet</NavLink>
      <NavLink to="/user/accountSetting/transaction">Transaction</NavLink>
      <NavLink to="/user/accountSetting/profileInformation">
        privacy settings
      </NavLink>
      <NavLink to="/user/accountSetting/notification">notification</NavLink>
      <NavLink to="/user/accountSetting/community">Community</NavLink>
      <NavLink to="/user/accountSetting/support">support</NavLink>
      <NavLink to="/user/accountSetting/logout">log out</NavLink> */}{" "}
      <NavLink
        to="/user/accountSetting/profileinformation"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        Profile information
      </NavLink>
      <NavLink
        to="/user/accountSetting/contactinformation"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        contact information
      </NavLink>
      <NavLink
        to="/user/accountSetting/paymentsettings"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        payment setting
      </NavLink>
      <NavLink
        to="/user/accountSetting/communicationpreferences"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        communication preferences
      </NavLink>
      <NavLink
        to="/user/accountSetting/securitysettings"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        security settings
      </NavLink>
      <NavLink
        to="/user/accountSetting/privacysettings"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        privacy settings
      </NavLink>
      <NavLink
        to="/user/accountSetting/notificationsettings"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        notification settings
      </NavLink>
      <NavLink
        to="/user/accountSetting/ordersettings"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        order settings
      </NavLink>
      <NavLink
        to="/user/accountSetting/subscriptionsettings"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        subscription settings
      </NavLink>
      <NavLink
        to="/user/accountSetting/socialmediaintegration"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        social media integration
      </NavLink>
      <NavLink
        to="/user/accountSetting/feedbackpreference"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        feedback preferences
      </NavLink>
      <NavLink
        to="/user/accountSetting/datamanagment"
        className={({ isActive }) =>
          isActive ? `${styles.AccountlinkActive}` : ""
        }
      >
        data managment
      </NavLink>
      <NavLink>log out</NavLink>
    </nav>
  );
}

export default AccountSettingOptions;
