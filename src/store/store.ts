import type { store } from "@/types/store";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart-slice";
import { createUserSlice } from "./user-slice";

export const useStore = create<store>()(
  immer((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a),
  })),
);
