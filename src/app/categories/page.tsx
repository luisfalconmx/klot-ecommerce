import Image from "next/image";
import Link from "next/link";
import { Category } from "@/components";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { getCollections } from "@/services";
import { createSlug } from "@/utils";

export default async function Categories() {
  const data = await getCollections();

  return (
    <main className="mt-12 mb-28 mx-6">
      <Link
        href="/"
        className="p-3 bg-pearl rounded-full cursor-pointer mb-4 block w-fit"
      >
        <Image src={IconArrowLeft} alt="" width={24} height={24} />
      </Link>

      <h1 className="text-xl text-primary-100 font-bold mb-6">
        Shop by Categories
      </h1>

      <div className="flex flex-col space-y-3">
        {data?.collections.edges.map((i) => (
          <Category
            key={i.node.id}
            variant="track"
            title={i.node.title}
            image={i.node.image?.url}
            link={`/categories/${createSlug(i.node.title)}`}
          />
        ))}
      </div>
    </main>
  );
}
