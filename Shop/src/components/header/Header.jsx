import styles from "./Header.module.css";
import Menu from "./Menu";
import Search from "./Search";
import Logo from "./Logo";
import PrimaryNavigation from "./PrimaryNavigation";
function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <PrimaryNavigation />
      <Menu />
    </header>
  );
}

export default Header;
