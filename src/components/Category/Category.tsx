import Image from "next/image";
import Link from "next/link";
import styles from "./Category.module.css";
import { cn } from "@/utils/cn";
import type { CategoryProps } from "./Category.d";
import CategoryImage from "@/assets/images/category-image.jpg";

export const Category = ({
  variant = "default",
  image = CategoryImage.src,
  title,
  link = "#",
}: CategoryProps) => {
  return (
    <Link
      href={link}
      className={cn(styles["Category"], {
        [styles["Category--track"]]: variant === "track",
      })}
    >
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
