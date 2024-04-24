import Link from "next/link";
import Image from "next/image";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { ProductCard } from "@/components";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main className="mt-12 mb-24 mx-6">
      <Link
        href="/categories"
        className="p-3 bg-pearl rounded-full cursor-pointer mb-4 block w-fit"
      >
        <Image src={IconArrowLeft} alt="" width={24} height={24} />
      </Link>

      <h1 className="text-xl text-primary-100 font-bold mb-6 first-letter:uppercase">
        {params.category} (240)
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
        <ProductCard name="Hoodie" price={100} />
      </div>
    </main>
  );
}
