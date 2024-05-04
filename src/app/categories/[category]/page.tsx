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
    <main className="mt-12 mb-24 mx-6 max-w-screen-xl lg:mx-auto">
      <section className="grid grid-cols-[48px_1fr_48px] items-center mb-8 lg:mb-16">
        <Link
          href="/categories"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>
        <h1 className="block text-center text-2xl text-primary-100 font-bold capitalize">
          {title} ({total})
        </h1>
      </section>

      <div className="grid grid-cols-2 lg:grid-cols-3 lg:max-w-screen-md lg:mx-auto gap-4">
        {data?.collectionByHandle?.products.nodes.map((i) => (
          <ProductCard
            key={i.id}
            name={i.title}
            price={i.priceRangeV2.minVariantPrice.amount}
            image={i.featuredImage?.url}
            link={`/products/${i.handle}`}
            merchandiseId={i.id}
          />
        ))}
      </div>
    </main>
  );
}
