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
  fetchUser: () => Promise<void>;
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
  fetchUser: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      address: "",
      age: 29,
      fullName: "Sakib",
      userName: "sadmansakib@gmail.com",
    });
  },
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
