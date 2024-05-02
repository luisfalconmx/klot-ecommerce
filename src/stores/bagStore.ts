import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Product = {
  merchandiseId: string;
  quantity: number;
};

type BagState = {
  products: Product[];
};

type BagActions = {
  addProduct: ({ quantity, merchandiseId }: Product) => void;
  deleteProduct: ({ quantity, merchandiseId }: Product) => void;
};

type BagStore = BagState & BagActions;

const defaultInitState: BagState = {
  products: [],
};

export const useBagStore = create(
  persist<BagStore>(
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
      updateProduct: () => {},
      deleteProduct: (product) => {
        set((state) => {
          const listOfProducts = state.products.filter(
            (i) => i.merchandiseId !== product.merchandiseId
          );

          return {
            products: [...listOfProducts],
          };
        });
      },
    }),
    {
      name: "klot-bag-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
