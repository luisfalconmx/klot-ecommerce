import Image from "next/image";
import Link from "next/link";
import { Category } from "@/components";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { getCollections } from "@/services/admin";
import { createSlug } from "@/utils";

export default async function Categories() {
  const data = await getCollections();

  return (
    <main className="mt-12 mb-28 mx-6 max-w-screen-xl lg:mx-auto">
      <section className="grid grid-cols-[48px_1fr_48px] items-center mb-8">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>
        <h1 className="block text-center text-2xl text-primary-100 font-bold">
          Categories
        </h1>
      </section>

      <div className="flex flex-col space-y-3 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4">
        {data?.collections.edges.map((i) => (
          <Category
            key={i.node.id}
            variant="track"
            title={i.node.title}
            image={i.node.image?.url}
            link={`/categories/${createSlug(i.node.handle)}`}
          />
        ))}
      </div>
    </main>
  );
}
