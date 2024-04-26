import Image from "next/image";
import styles from "./ProductCard.module.css";
import IconFav from "@/assets/icons/icon-fav.svg";
import ProductCardImage from "@/assets/images/product-card-image.jpg";
import type { ProductCardProps } from "./ProductCard.d";

export const ProductCard = ({
  name,
  price,
  image = ProductCardImage.src,
}: ProductCardProps) => {
  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles["ProductCard"]}>
      <div className={styles["ProductCard__head"]}>
        <Image
          className={styles["ProductCard__image"]}
          src={image}
          alt=""
          width={160}
          height={220}
        />
        <button className={styles["ProductCard__button"]}>
          <Image src={IconFav} alt={name} width={24} height={24} />
        </button>
      </div>
      <div className={styles["ProductCard__content"]}>
        <h3 className={styles["ProductCard__name"]}>{name}</h3>
        <p className={styles["ProductCard__price"]}>{formattedPrice}</p>
      </div>
    </div>
  );
};
