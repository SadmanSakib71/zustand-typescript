import type { store } from "@/types/store";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createUserSlice } from "./user-slice";

export const useStore = create<store>()(
  immer((...a) => ({
    ...createUserSlice(...a),
  })),
);
