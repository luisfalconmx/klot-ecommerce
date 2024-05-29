import Link from "next/link";
import Image from "next/image";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { ProductCard, InfiniteScroll } from "@/components";
import { getProductsByCollection } from "@/services/admin";
import LensIllustration from "@/assets/images/lens-illustration.svg";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const maxProducts = 12;
  const data = await getProductsByCollection(params.category, maxProducts);
  if (!data?.collectionByHandle?.products?.nodes) {
    notFound();
  }
  const hasNextPage =
    data?.collectionByHandle?.products.pageInfo.hasNextPage || false;
  const lastCursor =
    data?.collectionByHandle?.products.pageInfo.endCursor || undefined;
  const title = params.category;
  const total = data?.collectionByHandle?.productsCount?.count || 0;

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

      {total <= 0 && (
        <section className="flex flex-col items-center mx-6 mt-24">
          <Image
            src={LensIllustration}
            alt=""
            width={100}
            height={100}
            className="mb-7"
          />
          <p className="text-2xl font-bold mb-7 text-center">
            Sorry, we couldn&apos;t find any result
          </p>

          <Link
            href="/categories"
            className="bg-primary text-white py-4 px-6 rounded-full cursor-pointer"
          >
            Explore Categories
          </Link>
        </section>
      )}

      {total > 0 && (
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
          <InfiniteScroll
            handle="collection"
            slug={params.category}
            hasNextPage={hasNextPage}
            lastCursor={lastCursor}
            maxProducts={maxProducts}
          />
        </div>
      )}
    </main>
  );
}
