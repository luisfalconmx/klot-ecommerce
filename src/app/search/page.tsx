import Image from "next/image";
import Link from "next/link";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
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
      <section className="mx-6 flex items-center space-x-4 mb-8">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>

        <Search className="w-full" defaultValue={searchParams.term} />
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
