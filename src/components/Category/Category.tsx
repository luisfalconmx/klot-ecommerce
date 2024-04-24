import Image from "next/image";
import Link from "next/link";
import styles from "./Category.module.css";
import type { CategoryProps } from "./Category.d";
import CategoryImage from "@/assets/images/category-image.jpg";

export const Category = ({
  image = CategoryImage.src,
  title,
}: CategoryProps) => {
  return (
    <Link href="#" className={styles["Category"]}>
      <Image
        src={image}
        alt=""
        width={56}
        height={56}
        className={styles["Category__image"]}
      />
      <b className={styles["Category__title"]}>{title}</b>
    </Link>
  );
};
