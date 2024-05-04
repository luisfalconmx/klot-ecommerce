import Image from "next/image";
import styles from "./ProductCard.module.css";
import ProductCardImage from "@/assets/images/product-card-image.jpg";
import Link from "next/link";
import { Wishlist } from "@/components";
import { formatCurrency } from "@/utils";
import type { ProductCardProps } from "./ProductCard.d";

export const ProductCard = ({
  name,
  price,
  image = ProductCardImage.src,
  link = "",
  merchandiseId,
}: ProductCardProps) => {
  return (
    <article className={styles["ProductCard"]}>
      <Wishlist
        name={name}
        image={image}
        price={price}
        link={link}
        merchandiseId={merchandiseId}
      />
      <Link href={link}>
        <div className={styles["ProductCard__head"]}>
          <Image
            className={styles["ProductCard__image"]}
            src={image}
            alt=""
            fill
          />
        </div>
        <div className={styles["ProductCard__content"]}>
          <h3 className={styles["ProductCard__name"]}>{name}</h3>
          <p className={styles["ProductCard__price"]}>
            {formatCurrency(price)}
          </p>
        </div>
      </Link>
    </article>
  );
};
