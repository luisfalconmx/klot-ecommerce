import Link from "next/link";
import Image from "next/image";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { getProductsByTag } from "@/services";
import { ProductCard } from "@/components";

interface ProductProps {
  params: {
    slug: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const data = await getProductsByTag(params.slug);

  return (
    <main className="mt-12 mb-28 mx-6 max-w-screen-xl lg:mx-auto">
      <section className="grid grid-cols-[48px_1fr_48px] items-center mx-6 mb-8 lg:mb-16">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>
        <h1 className="block text-center text-2xl text-primary-100 font-bold capitalize">
          {params.slug.replace(/_/g, " ")}
        </h1>
      </section>

      <section className="max-w-screen-md lg:mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.products.nodes.map((i) => (
          <ProductCard
            key={i.title}
            name={i.title}
            price={i.priceRangeV2.minVariantPrice.amount}
            image={i.featuredImage?.url}
            link={`/products/${i.handle}`}
            merchandiseId={i.id}
          />
        ))}
      </section>
    </main>
  );
}
