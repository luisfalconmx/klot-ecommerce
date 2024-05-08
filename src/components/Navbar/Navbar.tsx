import Image from "next/image";
import Link from "next/link";
import IconHome from "@/assets/icons/icon-home.svg";
import IconBag from "@/assets/icons/icon-bag-alt.svg";
import IconFavorites from "@/assets/icons/icon-fav-alt.svg";
import styles from "./Navbar.module.css";

const routes = [
  { path: "/", icon: IconHome, text: "Home" },
  { path: "/wishlist", icon: IconFavorites, text: "Wishlist" },
  { path: "/cart", icon: IconBag, text: "Cart" },
  { path: "/account", icon: IconBag, text: "Account" },
];

export const Navbar = () => (
  <nav className={styles["Navbar"]}>
    <ul className={styles["Navbar__list"]}>
      {routes.map((route) => (
        <li key={route.path} className={styles["Navbar__item"]}>
          <Link href={route.path}>
            <Image
              src={route.icon}
              alt=""
              width={48}
              height={48}
              className={styles["Navbar__icon"]}
            />
            <p className={styles["Navbar__text"]}>{route.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
