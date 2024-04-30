import { getProductBySlug } from "@/services";
import Image from "next/image";
import Link from "next/link";
import IconArrowDown from "@/assets/icons/icon-arrow-down.svg";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import IconFav from "@/assets/icons/icon-fav.svg";
import IconPlus from "@/assets/icons/icon-plus.svg";
import IconMinus from "@/assets/icons/icon-minus.svg";

interface ProductProps {
  params: {
    slug: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const data = await getProductBySlug(params.slug);

  return (
    <main className="mt-6 mb-24">
      <section className="mx-6 flex justify-between mb-8">
        <Link
          href="/categories"
          className="p-3 bg-pearl rounded-full cursor-pointer  block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>

        <button className="p-3 bg-pearl rounded-full cursor-pointer block w-fit">
          <Image src={IconFav} alt="" width={24} height={24} />
        </button>
      </section>

      <section className="ml-6 mb-6 flex flex-nowrap overflow-auto space-x-2">
        <Image
          src={data?.productByHandle?.featuredImage?.src}
          alt=""
          width={300}
          height={400}
          className="rounded-lg h-[240px]"
        />
        <Image
          src={data?.productByHandle?.featuredImage?.src}
          alt=""
          width={300}
          height={400}
          className="rounded-lg h-[240px]"
        />
      </section>

      <section className="mx-6">
        <h1 className="font-bold text-2xl mb-4">
          {data?.productByHandle?.title}
        </h1>
        <b className="font-bold text-2xl text-primary mb-6 block">$148</b>
      </section>

      <section className="mx-6 mb-8 flex flex-col space-y-4">
        <button className="flex justify-between bg-pearl rounded-full py-4 px-6 items-center text-left gap-x-4">
          <p className="font-bold">Size</p>
          <div className="flex items-center space-x-4">
            <b className="w-6 text-center block">S</b>
            <Image src={IconArrowDown} alt="" width={24} height={24} />
          </div>
        </button>

        <button className="flex justify-between bg-pearl rounded-full py-4 px-6 items-center text-left gap-x-4">
          <p className="font-bold">Color</p>
          <div className="flex items-center space-x-4">
            <div className="bg-green-600 w-6 h-6 rounded-full" />
            <Image src={IconArrowDown} alt="" width={24} height={24} />
          </div>
        </button>

        <div className="flex justify-between bg-pearl rounded-full py-4 px-6 items-center text-left gap-x-4">
          <p className="font-bold">Quantity</p>
          <div className="flex items-center space-x-2">
            <button className="bg-primary p-1 rounded-full">
              <Image src={IconMinus} alt="" width={24} height={24} />
            </button>
            <input
              type="number"
              defaultValue={1}
              min={1}
              max={10}
              step={1}
              className="text-center text-xl appearance-none bg-transparent font-bold"
              disabled
            />
            <button className="bg-primary p-1 rounded-full">
              <Image src={IconPlus} alt="" width={24} height={24} />
            </button>
          </div>
        </div>

        <button className="bg-primary flex justify-between px-6 items-center text-white rounded-full py-4">
          <span className="font-bold">$148</span>
          <span className="">Add to bag</span>
        </button>
      </section>

      <section className="mx-6 mb-12">
        <h2 className="mb-3 text-xl font-bold">Description</h2>
        <p className="mb-12">{data?.productByHandle?.description}</p>

        <h2 className="mb-3 text-xl font-bold">Shipping & Returns</h2>
        <p>Free starndard shipping and free 60-day returns</p>
      </section>

      <section className="mx-6">
        <h2 className="mb-3 text-xl font-bold">Reviews</h2>
      </section>
    </main>
  );
}
