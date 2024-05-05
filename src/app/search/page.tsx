import Image from "next/image";
import Link from "next/link";
import { Search, ProductCard } from "@/components";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { searchProducts } from "@/services";
import LensIllustration from "@/assets/images/lens-illustration.svg";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  let products: any[] = [];

  if (searchParams.term) {
    const data = await searchProducts(searchParams.term || "");
    products = data?.products.nodes || [];
  }

  return (
    <main className="mt-12 mb-24 max-w-screen-xl lg:mx-auto">
      <section className="mx-6 flex lg:grid lg:grid-cols-[40px_1fr_40px] lg:justify-center items-center space-x-4 mb-8 lg:mb-16">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>

        <Search
          className="w-full lg:max-w-screen-md lg:!mx-auto block"
          defaultValue={searchParams.term}
        />
        <div></div>
      </section>

      {products.length <= 0 && (
        <section className="flex flex-col items-center mx-6 mt-24">
          <Image
            src={LensIllustration}
            alt=""
            width={100}
            height={100}
            className="mb-7"
          />
          <p className="text-2xl font-bold mb-7 text-center">
            Sorry, we couldn&apos;t find any matching result for your Search.
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
        <section className="mx-6">
          <div className="max-w-screen-md lg:mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
            {products.map((i) => (
              <ProductCard
                key={i.title}
                name={i.title}
                price={i.priceRangeV2.minVariantPrice.amount}
                image={i.featuredImage?.url}
                link={`/products/${i.handle}`}
                merchandiseId={i.id}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
