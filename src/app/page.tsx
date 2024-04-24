import { Search } from "@/components";
import { Category } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-16">
      <Search className="mx-6 mb-6" />

      <section className="mx-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-primary-100 font-bold">Categories</h2>
          <Link href="#" className="font-medium underline">
            See all
          </Link>
        </div>
        <div className="flex space-x-3">
          <Category title="hoddies" />
          <Category title="shorts" />
          <Category title="shoes" />
        </div>
      </section>

      <section className="mx-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-primary-100 font-bold">Top Selling</h2>
          <Link href="#" className="font-medium underline">
            See all
          </Link>
        </div>
      </section>
    </main>
  );
}
