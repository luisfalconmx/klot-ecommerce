import { ProductCard } from "@/components";

export default function WishList() {
  return (
    <main className="mt-12 mb-24">
      <section className="mx-6">
        <h1 className="text-xl text-primary-100 font-bold mb-6">Wish List</h1>

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
