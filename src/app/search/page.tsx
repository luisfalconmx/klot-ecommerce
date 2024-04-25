import Image from "next/image";
import Link from "next/link";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import IconFilter from "@/assets/icons/icon-filter.svg";
import { ProductCard } from "@/components";
import { Search } from "@/components";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <main className="mt-12 mb-24">
      <section className="mx-6 flex items-center space-x-4 mb-6">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>

        <Search className="w-full" defaultValue={searchParams.term} />
      </section>

      <section className="flex space-x-2 mb-8 mx-6 flex-nowrap max-w-full overflow-auto">
        <button className="pl-2 pr-3 py-1 bg-primary text-white cursor-pointer rounded-full flex items-center">
          <Image
            src={IconFilter}
            alt=""
            width={16}
            height={16}
            className="block invert mr-1"
          />
          Price
        </button>
        <button className="pl-2 pr-3 py-1 bg-pearl text-black cursor-pointer rounded-full flex items-center space-x-2">
          <Image
            src={IconFilter}
            alt=""
            width={16}
            height={16}
            className="block mr-1"
          />{" "}
          Sort by
        </button>
        <button className="pl-2 pr-3 py-1 cursor-pointer rounded-full bg-primary text-white flex items-center space-x-2">
          <Image
            src={IconFilter}
            alt=""
            width={16}
            height={16}
            className="block invert mr-1"
          />{" "}
          Genre
        </button>
        <button className="pl-2 pr-3 py-1 cursor-pointer rounded-full bg-primary text-white flex items-center space-x-2">
          <Image
            src={IconFilter}
            alt=""
            width={16}
            height={16}
            className="block invert mr-1"
          />{" "}
          Color
        </button>
      </section>

      <section className="mx-6">
        <div className="grid grid-cols-2 gap-4">
          <ProductCard name="Hoodie" price={100} />
          <ProductCard name="Hoodie" price={100} />
          <ProductCard name="Hoodie" price={100} />
          <ProductCard name="Hoodie" price={100} />
          <ProductCard name="Hoodie" price={100} />
          <ProductCard name="Hoodie" price={100} />
          <ProductCard name="Hoodie" price={100} />
        </div>
      </section>
    </main>
  );
}
