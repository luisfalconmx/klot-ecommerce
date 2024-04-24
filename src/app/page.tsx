import Image from "next/image";
import Link from "next/link";
import { Search, Category, ProductCard } from "@/components";
import Logo from "@/assets/images/logo.svg";
import IconBag from "@/assets/icons/icon-bag.svg";

export default function Home() {
  return (
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
          <Category title="hoddies" />
          <Category title="shorts" />
          <Category title="shoes" />
          <Category title="shoes" />
          <Category title="shoes" />
          <Category title="shoes" />
          <Category title="shoes" />
          <Category title="shoes" />
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
          <ProductCard name="Men's Harrington Jacket" price={148} />
          <ProductCard name="Men's Harrington Jacket" price={148} />
          <ProductCard name="Men's Harrington Jacket" price={148} />
          <ProductCard name="Men's Harrington Jacket" price={148} />
        </div>
      </section>

      <section className="ml-6 mb-8">
        <div className="flex justify-between items-center mb-4 mr-6">
          <h2 className="text-lg text-primary-100 font-bold">New In</h2>
          <Link href="#" className="font-medium underline">
            See all
          </Link>
        </div>
        <div className="flex space-x-4 flex-nowrap w-fit max-w-full overflow-x-auto pr-6 pb-2">
          <ProductCard name="Men's Harrington Jacket" price={148} />
          <ProductCard name="Men's Harrington Jacket" price={148} />
          <ProductCard name="Men's Harrington Jacket" price={148} />
          <ProductCard name="Men's Harrington Jacket" price={148} />
        </div>
      </section>
    </main>
  );
}
