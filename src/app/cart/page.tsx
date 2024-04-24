import { CartCard } from "@/components";

export default function CartPage() {
  return (
    <main className="mt-12 mb-24">
      <section className="mx-6">
        <h1 className="text-xl text-primary-100 font-bold mb-6">Cart</h1>

        <div className="grid grid-cols-1 gap-4">
          <CartCard name="Men's Harrington Jacket" price={100} />
          <CartCard name="Hoodie" price={100} />
          <CartCard name="Hoodie" price={100} />
          <CartCard name="Hoodie" price={100} />
          <CartCard name="Hoodie" price={100} />
          <CartCard name="Hoodie" price={100} />
          <CartCard name="Hoodie" price={100} />
        </div>
      </section>
    </main>
  );
}
