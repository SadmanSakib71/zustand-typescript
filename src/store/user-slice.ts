import type { store } from "@/types/store";
import { type StateCreator } from "zustand";

type UserState = {
  userName: string;
  fullName: string;
  address: string;
  age: number;
};

type UserActions = {
  setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<
  store,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  address: "",
  age: 0,
  fullName: "",
  userName: "",

  setAddress: (address) =>
    set((state) => {
      state.address = address;
    }),
});

// const userCountStore = create<{
//   nested: { count: number };
//   inCrement: () => void;
// }>((set) => ({
//   nested: { count: 0 },
//   inCrement: () =>
//     set((state) => ({
//       nested: { ...state.nested, count: state.nested.count + 1 },
//     })),
// }));
