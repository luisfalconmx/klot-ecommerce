import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/services";
import { removeDuplicates, formatCurrency } from "@/utils";
import {
  SizeSelector,
  ColorSelector,
  QuantitySelector,
  Wishlist,
} from "@/components";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { blurImage } from "@/config/blurImage";

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

  const getVariants = (term: string) => {
    if (data?.productByHandle?.variants) {
      const allVariants = data.productByHandle.variants.nodes.map((i) => {
        const target = i.selectedOptions.find(
          (i) => i.name.toLowerCase() === term
        );

        if (target) return target.value;
        return "";
      });

      return removeDuplicates(allVariants);
    } else {
      return [];
    }
  };

  const sizeVariants = getVariants("size").filter((i) => i !== "");
  const colorVariants = getVariants("color").filter((i) => i !== "");

  const variantFound = data?.productByHandle?.variants.nodes.find((variant) => {
    const availableVariants = variant.selectedOptions.map((i) => {
      return i.name.toLowerCase(), i.value.toLowerCase();
    });

    if (searchParams.size && searchParams.color) {
      return (
        availableVariants.includes(
          searchParams.size?.toLowerCase() as string
        ) &&
        availableVariants.includes(searchParams.color?.toLowerCase() as string)
      );
    }

    if (searchParams.size) {
      return availableVariants.includes(
        searchParams.size?.toLowerCase() as string
      );
    }

    if (searchParams.color) {
      return availableVariants.includes(
        searchParams.color?.toLowerCase() as string
      );
    }

    return false;
  });

  if (variantFound) {
    selectedVariant = variantFound;
  } else {
    selectedVariant = data?.productByHandle?.variants.nodes[0];
  }

  const hasOnlyDefaultVariant = data?.productByHandle?.hasOnlyDefaultVariant;
  const merchandiseId = selectedVariant?.id as string;
  const defaultSize = selectedVariant?.selectedOptions.find(
    (i) => i.name.toLowerCase() === "size"
  );
  const defaultColor = selectedVariant?.selectedOptions.find(
    (i) => i.name.toLowerCase() === "color"
  );
  let productImage = selectedVariant?.image?.url
    ? selectedVariant?.image?.url
    : data?.productByHandle?.featuredImage?.src;

  let title = data?.productByHandle?.title;
  let price = selectedVariant?.price || 0;
  let availableStock = selectedVariant?.inventoryQuantity || 0;

  return (
    <main className="mt-8 mb-24 max-w-screen-xl lg:mx-auto">
      <section className="mx-6 flex justify-between items-center mb-8 lg:mb-16 relative">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer  block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>

        <Wishlist
          image={productImage}
          name={title as string}
          price={price}
          merchandiseId={data?.productByHandle?.id as string}
          link={`/products/${data?.productByHandle?.handle}`}
        />
      </section>

      <section className="mx-6 mb-6 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <figure className="h-[320px] lg:h-[500px] w-full relative mb-8">
          <Image
            src={productImage}
            alt={title || ""}
            className="rounded-lg object-cover object-top w-full "
            placeholder="blur"
            fill
            blurDataURL={blurImage}
          />
        </figure>

        <div>
          <h1 className="font-bold text-2xl mb-4 lg:text-5xl">{title}</h1>
          <div className="flex items-center space-x-2 mb-6">
            <b className="font-bold text-2xl text-primary lg:text-3xl block">
              {formatCurrency(price)}
            </b>
            {availableStock <= 0 && (
              <span className="text-red-500 font-bold text-xl lg:text-2xl">
                - out of stock
              </span>
            )}
          </div>

          <div className="mb-8 flex flex-col space-y-4">
            {!hasOnlyDefaultVariant && sizeVariants.length > 0 && (
              <SizeSelector
                defaultValue={defaultSize?.value || ""}
                sizes={sizeVariants}
              />
            )}
            {!hasOnlyDefaultVariant && colorVariants.length > 0 && (
              <ColorSelector
                defaultValue={defaultColor?.value || ""}
                colors={colorVariants}
              />
            )}

            <QuantitySelector
              name={title as string}
              merchandiseId={merchandiseId}
              defaultQuantity={availableStock ? 1 : 0}
              availableStock={availableStock}
              unitaryPrice={price}
              image={productImage}
              size={hasOnlyDefaultVariant ? "" : defaultSize?.value}
              color={hasOnlyDefaultVariant ? "" : defaultColor?.value}
            />
          </div>
        </div>
      </section>

      <section className="mx-6 mb-12">
        <h2 className="mb-3 text-2xl lg:text-3xl font-bold">Description</h2>
        <p className="mb-12 lg:text-xl">{data?.productByHandle?.description}</p>

        <h2 className="mb-3 text-2xl font-bold lg:text-3xl">Shipping Policy</h2>

        <h3 className="mb-3 text-lg font-bold lg:text-xl">Shipping Methods</h3>
        <p className="lg:text-xl mb-8">
          We offer standard shipping via reputable carriers such as UPS, FedEx,
          and USPS. Expedited shipping options are also available for faster
          delivery.
        </p>

        <h3 className="mb-3 text-lg font-bold lg:text-xl">Processing Time</h3>
        <p className="lg:text-xl mb-8">
          Orders are typically processed and shipped within 1-2 business days.
          During peak seasons or promotional periods, processing times may be
          slightly longer.
        </p>

        <h3 className="mb-3 text-lg font-bold lg:text-xl">Shipping Rates</h3>
        <p className="lg:text-xl mb-8">
          Shipping rates are calculated based on the weight of the items, the
          shipping method selected, and the destination. You can view the
          shipping cost at checkout before completing your purchase.
        </p>

        <h2 className="mb-3 text-2xl lg:text-3xl font-bold">
          Returns & Exchanges
        </h2>

        <h3 className="mb-3 text-lg font-bold lg:text-xl">Return Policy</h3>
        <p className="lg:text-xl mb-8">
          If you are not completely satisfied with your purchase, you may return
          it within 30 days for a full refund or exchange. The item must be
          unused and in its original packaging.
        </p>

        <h3 className="mb-3 text-lg font-bold lg:text-xl">
          How to Initiate a Return
        </h3>
        <p className="lg:text-xl mb-8">
          To initiate a return, please contact our customer service team with
          your order details. We will provide you with instructions on how to
          return the item.
        </p>
      </section>
    </main>
  );
}
