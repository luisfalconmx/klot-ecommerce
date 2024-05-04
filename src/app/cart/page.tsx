"use client";

import Image from "next/image";
import { useBagStore } from "@/stores/useCartStore";
import { CartCard } from "@/components";
import { formatCurrency } from "@/utils";
import BagIllustration from "@/assets/images/bag-illustration.svg";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import Link from "next/link";

export default function Cart() {
  const { products } = useBagStore();
  const subtotal = products.map((i) => i.quantity * i.unitaryPrice);
  const total = formatCurrency(subtotal.reduce((a, b) => a + b, 0));

  return (
    <main className="mt-12 mb-24 lg:max-w-screen-xl lg:mx-auto">
      <section className="grid grid-cols-[48px_1fr_48px] items-center mx-6 mb-8 lg:mb-16">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>
        <h1 className="block text-center text-2xl text-primary-100 font-bold">
          Cart
        </h1>
      </section>
      <section className="mx-6 lg:mt-32">
        {products.length <= 0 && (
          <section className="flex flex-col items-center">
            <Image
              src={BagIllustration}
              alt=""
              width={100}
              height={100}
              className="mb-7"
            />
            <p className="text-2xl font-bold mb-7 text-center">
              Your Cart is Empty
            </p>

            <Link
              href="/categories"
              className="bg-primary text-white py-4 px-6 rounded-full cursor-pointer"
            >
              Explore Categories
            </Link>
          </section>
        )}

        {products.length > 0 && (
          <>
            <section className="grid grid-cols-1 gap-4 mb-5">
              {products.map((product) => (
                <CartCard
                  key={product.merchandiseId}
                  name={product.name}
                  defaultQuantity={product.quantity}
                  availableStock={product.availableStock}
                  merchandiseId={product.merchandiseId}
                  image={product.image}
                  unitaryPrice={product.unitaryPrice}
                  size={product.size}
                  color={product.color}
                />
              ))}
            </section>
            <section className="border-t block text-xl text-right pt-3 lg:text-3xl">
              <b>Total: {total}</b>
            </section>
            <button className="bg-primary text-center px-6 py-4 text-xl text-white max-w-[400px] mx-auto block rounded-full w-full mt-16">
              Checkout
            </button>
          </>
        )}
      </section>
    </main>
  );
}
