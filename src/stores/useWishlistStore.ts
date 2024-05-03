import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Product = {
  name: string;
  price: number;
  image: string;
  link: string;
  merchandiseId: string;
};

type WishlistState = {
  products: Product[];
};

type WishlistActions = {
  addProduct: ({ name, price, image, link, merchandiseId }: Product) => void;
  deleteProduct: (merchandiseId: string) => void;
};

type WishlistStore = WishlistState & WishlistActions;

const defaultInitState: WishlistState = {
  products: [],
};

export const useWishlistStore = create(
  persist<WishlistStore>(
    (set) => ({
      ...defaultInitState,
      addProduct: (product) => {
        set((state) => {
          const exists = state.products.find(
            (i) => i.merchandiseId === product.merchandiseId
          );

          if (exists) {
            const listOfProducts = state.products.filter(
              (i) => i.merchandiseId !== product.merchandiseId
            );

            return {
              products: [...listOfProducts, product],
            };
          }

          return {
            products: [...state.products, product],
          };
        });
      },
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
      name: "klot-whislist-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
