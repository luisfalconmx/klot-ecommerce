import { ProductCard } from "@/components";
import Link from "next/link";
import Image from "next/image";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";

export default function WishList() {
  return (
    <main className="mt-12 mb-24">
      <section className="grid grid-cols-[48px_1fr_48px] items-center mx-6 mb-8">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>
        <h1 className="block text-center text-2xl text-primary-100 font-bold">
          Wishlist
        </h1>
      </section>
      <section className="grid grid-cols-2 gap-4 mx-6">
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
      </section>
    </main>
  );
}
