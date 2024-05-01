import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/services";
import { SizeSelector, ColorSelector } from "@/components";
import IconArrowDown from "@/assets/icons/icon-arrow-down.svg";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import IconFav from "@/assets/icons/icon-fav.svg";
import IconPlus from "@/assets/icons/icon-plus.svg";
import IconMinus from "@/assets/icons/icon-minus.svg";

interface ProductProps {
  params: {
    slug: string;
  };
  searchParams: {
    size?: string;
    color?: string;
  };
}

export default async function Product({ params, searchParams }: ProductProps) {
  const data = await getProductBySlug(params.slug);

  let selectedVariant;

  if (searchParams.color && searchParams.size) {
    // const tempSelectedVariant = data?.productByHandle?.variants.nodes.find(
    //   (i) => {
    //     const matchColor = i.selectedOptions[0].value
    //       .toLowerCase()
    //       .includes(searchParams.color || "");
    //     const matchSize = i.selectedOptions[0].value
    //       .toLowerCase()
    //       .includes(searchParams.color || "");
    //     return matchColor && matchSize;
    //   }
    // );
    // if (!tempSelectedVariant) return notFound();
    // selectedVariant = tempSelectedVariant;
  } else if (searchParams.color) {
    // const tempSelectedVariant = data?.productByHandle?.variants.nodes.find(
    //   (i) =>
    //     i.selectedOptions[0].value
    //       .toLowerCase()
    //       .includes(searchParams.color || "")
    // );
    // if (!tempSelectedVariant) return notFound();
    // selectedVariant = tempSelectedVariant;
  } else if (searchParams.size) {
    // const tempSelectedVariant = data?.productByHandle?.variants.nodes.find(
    //   (i) =>
    //     i.selectedOptions[0].value
    //       .toLowerCase()
    //       .includes(searchParams.size || "")
    // );
    // if (!tempSelectedVariant) return notFound();
    // selectedVariant = tempSelectedVariant;
  } else {
    selectedVariant = data?.productByHandle?.variants.nodes[0];
  }

  const hasOnlyDefaultVariant = data?.productByHandle?.hasOnlyDefaultVariant;
  let productImage = hasOnlyDefaultVariant
    ? data.productByHandle?.featuredImage?.src
    : selectedVariant?.image?.url;
  let title = data?.productByHandle?.title;
  let price = selectedVariant?.price;
  let quantity = selectedVariant?.inventoryQuantity || 0;

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
          src={productImage}
          alt={title || ""}
          width={300}
          height={400}
          className="rounded-lg h-[300px] object-cover object-top"
        />
      </section>

      <section className="mx-6">
        <h1 className="font-bold text-2xl mb-4">{title}</h1>
        <div className="flex items-center space-x-2 mb-6">
          <b className="font-bold text-2xl text-primary  block">${price}</b>
          {quantity <= 0 && (
            <span className="text-red-500 font-bold text-xl">
              - out of stock
            </span>
          )}
        </div>
      </section>

      <section className="mx-6 mb-8 flex flex-col space-y-4">
        {!hasOnlyDefaultVariant && (
          <SizeSelector sizes={["s", "m", "l", "xl", "2xl"]} />
        )}

        {!hasOnlyDefaultVariant && (
          <ColorSelector
            colors={["orange", "black", "red", "yellow", "blue"]}
          />
        )}

        <div className="flex justify-between bg-pearl rounded-full py-4 px-6 items-center text-left gap-x-4">
          <p className="font-bold">Quantity</p>
          <div className="flex items-center space-x-2">
            <button
              className="bg-primary disabled:bg-gray-300 p-1 rounded-full"
              disabled={quantity <= 0}
            >
              <Image src={IconMinus} alt="" width={24} height={24} />
            </button>
            <input
              type="number"
              defaultValue={quantity ? 1 : 0}
              min={1}
              max={quantity}
              step={1}
              className="text-center text-xl appearance-none bg-transparent font-bold"
              disabled
            />
            <button
              className="bg-primary p-1 rounded-full disabled:bg-gray-300"
              disabled={quantity <= 0}
            >
              <Image src={IconPlus} alt="" width={24} height={24} />
            </button>
          </div>
        </div>

        <button
          className="bg-primary flex justify-between px-6 items-center text-white rounded-full py-4 disabled:bg-pearl disabled:text-neutral-400"
          disabled={quantity <= 0}
        >
          <span className="font-bold">${price}</span>
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
