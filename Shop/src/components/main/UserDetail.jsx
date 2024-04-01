import styles from "./UserDetail.module.css";
import avator from "/Profile.png";
function UserDetail({
  user = {
    firstname: "biniyam",
    lastname: "kefyalew",
    username: "right-hand-man",
    email: "biniyamkefyalew1@gmail.com",
    phonenumber: "+251911290020",
    address: "bahrdar",
  },
}) {
  return (
    <div className={styles.UserDetailBox}>
      <div className={styles.profileImageBox}>
        <img src={user.profileImage ? user.profileImage : avator} />
      </div>
      <div className={styles.UserDetail}>
        <p>{`${user.firstname} ${user.lastname}`} </p>
        <p>{user.username} </p>
        <a href={`http://${user.email}`}>{user.email} </a>
        <a href={`tel:${user.phonenumber}`}>{user.phonenumber}</a>
        <p>{user.address} </p>
      </div>
    </div>
  );
}

export default UserDetail;
