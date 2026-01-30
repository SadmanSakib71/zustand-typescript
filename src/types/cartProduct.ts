import type { product } from "./product";

export type CartProduct = product & { qty: number };
