import Image from "next/image";
import Link from "next/link";
import { Navbar, Search, Category, ProductCard } from "@/components";
import Logo from "@/assets/images/logo.svg";
import { getCollections, getProductsByTag } from "@/services/admin";
import { createSlug } from "@/utils";
import { ThemeSwitch } from "@/components";
import { getServerSession } from "next-auth";

export default async function Home() {
  const categories = await getCollections();
  const topSelling = await getProductsByTag("top_selling", 10);
  const session = await getServerSession();

  console.log({ session });

  return (
    <>
      <Navbar />
      <main className="mt-12 mb-24 max-w-screen-xl mx-auto">
        <section className="grid grid-cols-2 lg:grid-cols-[80px_1fr_350px_auto] lg:gap-x-8 mx-6 justify-between mb-8 items-center gap-y-6">
          <Image
            src={Logo}
            alt=""
            width={60}
            height={30}
            className="dark:invert"
          />
          <nav className="hidden lg:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/categories" className="font-medium">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="font-medium">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" className="font-medium">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/signin" className="font-medium">
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
          <Search className="w-full row-start-2 lg:row-start-auto col-span-2 lg:col-auto" />
          <div className="ml-auto flex items-center">
            <ThemeSwitch />
            {session && session.user?.image && (
              <Image
                src={session.user.image}
                alt=""
                width={36}
                height={36}
                className="rounded-full"
              />
            )}
          </div>
        </section>

        <section className="bg-primary rounded-xl mb-12 hidden lg:block">
          <div className="flex flex-col items-center justify-center h-64">
            <h1 className="text-4xl text-white font-bold mb-4">
              Welcome to our store
            </h1>
            <p className="text-white text-lg">
              Get your favorite items at the best price
            </p>
          </div>
        </section>

        <section className="ml-6 mb-8 lg:mb-12">
          <div className="flex justify-between items-center mb-4 mr-6">
            <h2 className="text-lg lg:text-2xl text-primary-100 font-bold">
              Categories
            </h2>
            <Link
              href="/categories"
              className="font-medium underline lg:text-lg"
            >
              See all
            </Link>
          </div>
          <div className="flex flex-nowrap max-w-full overflow-auto space-x-5 lg:space-x-8 pr-6 pb-2">
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
            <h2 className="text-lg lg:text-2xl text-primary-100 font-bold">
              Top Selling
            </h2>
            <Link
              href={`/tag/top_selling`}
              className="font-medium underline text-lg"
            >
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
