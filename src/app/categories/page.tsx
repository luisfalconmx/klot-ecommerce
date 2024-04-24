import Image from "next/image";
import Link from "next/link";
import { Category } from "@/components";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";

export default function Categories() {
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
        <Category variant="track" title="Hoodies" />
        <Category variant="track" title="Hoodies" />
        <Category variant="track" title="Hoodies" />
        <Category variant="track" title="Hoodies" />
        <Category variant="track" title="Hoodies" />
        <Category variant="track" title="Hoodies" />
      </div>
    </main>
  );
}
