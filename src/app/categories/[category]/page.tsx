import Link from "next/link";
import Image from "next/image";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { ProductCard } from "@/components";
import { getProductsByCollection } from "@/services";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const data = await getProductsByCollection(params.category);
  const title = params.category;
  const total = data?.collectionByHandle?.productsCount?.count;

  return (
    <main className="mt-12 mb-24 mx-6">
      <Link
        href="/categories"
        className="p-3 bg-pearl rounded-full cursor-pointer mb-4 block w-fit"
      >
        <Image src={IconArrowLeft} alt="" width={24} height={24} />
      </Link>

      <h1 className="text-xl text-primary-100 font-bold mb-6 first-letter:uppercase">
        {title} ({total})
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {data?.collectionByHandle?.products.nodes.map((i) => (
          <ProductCard
            key={i.id}
            name={i.title}
            price={i.priceRangeV2.minVariantPrice.amount}
            image={i.featuredImage?.url}
          />
        ))}
      </div>
    </main>
  );
}
