"use client";

import { useState } from "react";
import { useBagStore } from "@/stores/useCartStore";
import Image from "next/image";
import styles from "./CartCard.module.css";
import IconX from "@/assets/icons/icon-x.svg";
import ProductCardImage from "@/assets/images/product-card-image.jpg";
import { formatCurrency } from "@/utils";
import IconPlus from "@/assets/icons/icon-plus.svg";
import IconMinus from "@/assets/icons/icon-minus.svg";
import type { CartCardProps } from "./CartCard.d";

export const CartCard = ({
  name,
  unitaryPrice,
  defaultQuantity,
  availableStock,
  merchandiseId,
  image = ProductCardImage.src,
  size,
  color,
}: CartCardProps) => {
  const [quantity, setQuantity] = useState<number>(defaultQuantity);
  const { addProduct, deleteProduct } = useBagStore();
  const total = formatCurrency(unitaryPrice * quantity);

  const handleRemoveItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      addProduct({
        name,
        availableStock,
        quantity: quantity - 1,
        merchandiseId,
        image,
        unitaryPrice,
      });
    }
  };

  const handleRemoveFromBag = () => {
    deleteProduct(merchandiseId);
  };

  const handleAddItem = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
      addProduct({
        name,
        availableStock,
        quantity: quantity + 1,
        merchandiseId,
        image,
        unitaryPrice,
      });
    }
  };

  return (
    <div className={styles["CartCard"]}>
      <Image
        src={image}
        alt=""
        width={90}
        height={90}
        className="object-cover rounded-xl"
      />
      <div className={styles["CartCard__container"]}>
        <div className={styles["CartCard__content"]}>
          <h3 className={styles["CartCard__name"]}>{name}</h3>
          <p className={styles["CartCard__price"]}>
            {formatCurrency(unitaryPrice)}
          </p>

          <div className="flex items-center w-full space-x-2">
            <button
              className="bg-primary disabled:bg-gray-300 p-1 rounded-full"
              disabled={availableStock <= 0}
              onClick={handleRemoveItem}
            >
              <Image src={IconMinus} alt="" width={24} height={24} />
            </button>
            <input
              type="number"
              value={quantity}
              min={1}
              max={availableStock}
              step={1}
              className={styles["CartCard__input-quantity"]}
              disabled
            />
            <button
              className="bg-primary p-1 rounded-full disabled:bg-gray-300"
              disabled={availableStock <= 0}
              onClick={handleAddItem}
            >
              <Image src={IconPlus} alt="" width={24} height={24} />
            </button>
          </div>
          <div className="flex space-x-2">
            {size && (
              <p className={styles["CartCard__tag"]}>
                Size: <b className="uppercase">{size}</b>
              </p>
            )}
            {color && (
              <p className={styles["CartCard__tag"]}>
                Color: <b className="capitalize">{color}</b>
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <button
          className={styles["CartCard__trash"]}
          onClick={handleRemoveFromBag}
        >
          <Image src={IconX} alt="" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};
