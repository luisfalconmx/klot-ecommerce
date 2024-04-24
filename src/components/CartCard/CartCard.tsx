import Image from "next/image";
import styles from "./CartCard.module.css";
import IconX from "@/assets/icons/icon-x.svg";
import ProductCardImage from "@/assets/images/product-card-image.jpg";
import type { CartCardProps } from "./CartCard.d";

export const CartCard = ({
  name,
  price,
  image = ProductCardImage.src,
}: CartCardProps) => {
  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles["CartCard"]}>
      <Image src={image} alt="" width={160} height={220} />
      <div className={styles["CartCard__container"]}>
        <div className={styles["CartCard__actions"]}>
          <button className={styles["CartCard__button"]}>
            <Image src={IconX} alt="" width={24} height={24} />
          </button>
        </div>
        <div className={styles["CartCard__content"]}>
          <h3 className={styles["CartCard__name"]}>{name}</h3>
          <p className={styles["CartCard__price"]}>{formattedPrice}</p>

          <div className="flex items-center">
            <button className="w-[28px] h-[28px] flex items-center justify-center cursor-pointer active:outline outline-primary rounded-lg text-2xl">
              -
            </button>
            <input
              type="number"
              min={1}
              max={10}
              step={1}
              defaultValue={2}
              disabled
              className="w-fit block text-center bg-transparent"
            />
            <button className="w-[28px] h-[28px] flex items-center justify-center cursor-pointer active:outline outline-primary rounded-lg text-2xl">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
