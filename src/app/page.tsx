import Image from "next/image";
import Link from "next/link";
import { Navbar, Search, Category, ProductCard } from "@/components";
import Logo from "@/assets/images/logo.svg";
import IconBag from "@/assets/icons/icon-bag.svg";
import { getCollections, getProductsByTag } from "@/services";
import { createSlug } from "@/utils";

export default async function Home() {
  const categories = await getCollections();
  const topSelling = await getProductsByTag("top_selling");

  return (
    <>
      <Navbar />
      <main className="mt-12 mb-24">
        <section className="flex mx-6 justify-between mb-8">
          <Image src={Logo} alt="" width={60} height={30} />
          <Link
            href="#"
            className="p-2 rounded-full bg-primary w-fit flex items-center justify-center"
          >
            <Image
              src={IconBag}
              alt=""
              width={24}
              height={24}
              className="invert"
            />
          </Link>
        </section>

        <Search className="mx-6 mb-8" />

        <section className="ml-6 mb-8">
          <div className="flex justify-between items-center mb-4 mr-6">
            <h2 className="text-lg text-primary-100 font-bold">Categories</h2>
            <Link href="/categories" className="font-medium underline">
              See all
            </Link>
          </div>
          <div className="flex flex-nowrap max-w-full overflow-auto space-x-5 pr-6 pb-2">
            {categories?.collections.edges.map((i) => (
              <Category
                key={i.node.id}
                title={i.node.title || ""}
                image={i.node.image?.url || ""}
                link={`/categories/${createSlug(i.node.handle || "")}`}
              />
            ))}
          </div>
        </section>

        <section className="ml-6 mb-8">
          <div className="flex justify-between items-center mb-4 mr-6">
            <h2 className="text-lg text-primary-100 font-bold">Top Selling</h2>
            <Link href="#" className="font-medium underline">
              See all
            </Link>
          </div>
          <div className="flex space-x-4 flex-nowrap w-fit max-w-full overflow-x-auto pr-6 pb-2">
            {topSelling?.products.nodes.map((i) => (
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
      </main>
    </>
  );
}
