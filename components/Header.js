import styles from "../styles/header.module.scss";
import Link from "next/link";
import DarkSwitch from "./DarkSwitch";
import Button from "./Button";

const Header = () => (
  <>
    <header className={styles.appHeader}>
      <Link href="/">
        <a className={`${styles.navIcon}`}>
          Gaël <span className="colorBlue">David</span>
        </a>
      </Link>
      <DarkSwitch />
      <div className={styles.navBurger}>|||</div>
      <div className={styles.navButtons}>
        <Link href="/bucket/CV_G_David.pdf" target="_blank">
          <a className={styles.resumeNav}>Resume</a>
        </Link>
        <Link href="/#projects">
          <a>Projects</a>
        </Link>
        <Link href="/#technologies">
          <a>Technologies</a>
        </Link>
      </div>
    </header>
  </>
);

export default Header;
