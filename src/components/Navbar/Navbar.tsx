import Image from "next/image";
import Link from "next/link";
import IconHome from "@/assets/icons/icon-home.svg";
import IconBag from "@/assets/icons/icon-bag-alt.svg";
import IconFavorites from "@/assets/icons/icon-fav-alt.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => (
  <nav className={styles["Navbar"]}>
    <ul className={styles["Navbar__list"]}>
      <li className={styles["Navbar__item"]}>
        <Link href="/wishlist">
          <Image
            src={IconFavorites}
            alt=""
            width={48}
            height={48}
            className={styles["Navbar__icon"]}
          />
          <p className={styles["Navbar__text"]}>Wishlist</p>
        </Link>
      </li>
      <li className={styles["Navbar__item"]}>
        <Link href="/">
          <Image
            src={IconHome}
            alt=""
            width={48}
            height={48}
            className={styles["Navbar__icon"]}
          />
          <p className={styles["Navbar__text"]}>Home</p>
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
          <p className={styles["Navbar__text"]}>Cart</p>
        </Link>
      </li>
    </ul>
  </nav>
);
