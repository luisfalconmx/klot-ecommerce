import Link from "next/link";
import Image from "next/image";
import {
  HomeIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import styles from "./Navbar.module.css";
import { getServerSession } from "next-auth";

const routes = [
  {
    path: "/",
    icon: (
      <HomeIcon width={32} height={32} className={styles["Navbar__icon"]} />
    ),
    text: "Home",
  },
  {
    path: "/wishlist",
    icon: (
      <HeartIcon width={32} height={32} className={styles["Navbar__icon"]} />
    ),
    text: "Wishlist",
  },
  {
    path: "/cart",
    icon: (
      <ShoppingBagIcon
        width={32}
        height={32}
        className={styles["Navbar__icon"]}
      />
    ),
    text: "Cart",
  },
];

export const Navbar = async () => {
  const session = await getServerSession();

  return (
    <nav className={styles["Navbar"]}>
      <ul className={styles["Navbar__list"]}>
        {routes.map((route) => (
          <li key={route.path} className={styles["Navbar__item"]}>
            <Link className={styles["Navbar__link"]} href={route.path}>
              {route.icon}
              <p className={styles["Navbar__text"]}>{route.text}</p>
            </Link>
          </li>
        ))}

        {session ? (
          <li className={styles["Navbar__item"]}>
            <Link className={styles["Navbar__link"]} href="/account">
              <Image
                src={session.user?.image || ""}
                alt={session.user?.name || ""}
                width={32}
                height={32}
                className={styles["Navbar__user"]}
              />
              <p className={styles["Navbar__text"]}>Account</p>
            </Link>
          </li>
        ) : (
          <li className={styles["Navbar__item"]}>
            <Link href="/signin">
              <UserCircleIcon
                width={32}
                height={32}
                className={styles["Navbar__icon"]}
              />
              <p className={styles["Navbar__text"]}>Signin</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
