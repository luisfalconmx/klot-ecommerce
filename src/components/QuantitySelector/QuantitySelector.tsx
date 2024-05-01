"use client";

import { useState } from "react";
import Image from "next/image";
import IconPlus from "@/assets/icons/icon-plus.svg";
import IconMinus from "@/assets/icons/icon-minus.svg";
import { formatCurrency } from "@/utils";
import type { QuantitySelectorProps } from "./QuantitySelector.d";

export const QuantitySelector = ({
  defaultQuantity = 0,
  availableStock,
  unitariePrice,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState<number>(defaultQuantity);
  const total = formatCurrency(quantity * unitariePrice);

  const handleDelete = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <div className="flex justify-between bg-pearl rounded-full py-4 px-6 items-center text-left gap-x-4">
        <p className="font-bold">Quantity</p>
        <div className="flex items-center space-x-2">
          <button
            className="bg-primary disabled:bg-gray-300 p-1 rounded-full"
            disabled={availableStock <= 0}
            onClick={handleDelete}
          >
            <Image src={IconMinus} alt="" width={24} height={24} />
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            max={availableStock}
            step={1}
            className="text-center text-xl appearance-none bg-transparent font-bold"
            disabled
          />
          <button
            className="bg-primary p-1 rounded-full disabled:bg-gray-300"
            disabled={availableStock <= 0}
            onClick={handleAdd}
          >
            <Image src={IconPlus} alt="" width={24} height={24} />
          </button>
        </div>
      </div>
      <button
        className="bg-primary flex justify-between px-6 items-center text-white rounded-full py-4 disabled:bg-pearl disabled:text-neutral-400"
        disabled={availableStock <= 0}
      >
        <span className="font-bold">{total}</span>
        <span className="">Add to bag</span>
      </button>
    </>
  );
};
