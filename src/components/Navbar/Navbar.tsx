import Image from "next/image";
import Link from "next/link";
import IconHome from "@/assets/icons/icon-home.svg";
import IconBag from "@/assets/icons/icon-bag-alt.svg";
import IconFavorites from "@/assets/icons/icon-fav-alt.svg";
import IconUser from "@/assets/icons/icon-user.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <nav className={styles["Navbar"]}>
    <ul className={styles["Navbar__list"]}>
      <li className={styles["Navbar__item"]}>
        <Link href="/">
          <Image
            src={IconHome}
            alt=""
            width={48}
            height={48}
            className={styles["Navbar__icon"]}
          />
        </Link>
      </li>
      <li className={styles["Navbar__item"]}>
        <Link href="/wishlist">
          <Image
            src={IconFavorites}
            alt=""
            width={48}
            height={48}
            className={styles["Navbar__icon"]}
          />
        </Link>
      </li>
      <li className={styles["Navbar__item"]}>
        <Link href="/cart">
          <Image
            src={IconBag}
            alt=""
            width={48}
            height={48}
            className={styles["Navbar__icon"]}
          />
        </Link>
      </li>
      <li className={styles["Navbar__item"]}>
        <Link href="/account">
          <Image
            src={IconUser}
            alt=""
            width={48}
            height={48}
            className={styles["Navbar__icon"]}
          />
        </Link>
      </li>
    </ul>
  </nav>
);
