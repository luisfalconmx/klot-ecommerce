import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Product = {
  name: string;
  unitaryPrice: number;
  merchandiseId: string;
  availableStock: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
};

type CartState = {
  products: Product[];
};

type CartActions = {
  addProduct: ({ quantity, merchandiseId }: Product) => void;
  deleteProduct: (merchandiseId: string) => void;
};

type CartStore = CartState & CartActions;

const defaultInitState: CartState = {
  products: [],
};

export const useBagStore = create(
  persist<CartStore>(
    (set) => ({
      ...defaultInitState,
      addProduct: (product) => {
        set((state) => {
          const exists = state.products.find(
            (i) => i.merchandiseId === product.merchandiseId
          );

          if (exists) {
            // found the index
            const index = state.products.findIndex(
              (i) => i.merchandiseId === product.merchandiseId
            );

            // update the product
            state.products[index].quantity = product.quantity;

            return {
              products: [...state.products],
            };
          }

          return {
            products: [...state.products, product],
          };
        });
      },
      updateProduct: () => {},
      deleteProduct: (merchandiseId) => {
        set((state) => {
          const listOfProducts = state.products.filter(
            (i) => i.merchandiseId !== merchandiseId
          );

          return {
            products: [...listOfProducts],
          };
        });
      },
    }),
    {
      name: "klot-cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
