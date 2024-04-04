import { create } from "zustand";
import { OrderItem } from "./types";

interface Store {
  order: OrderItem[];
}

const useStore = create<Store>(() => ({
  order: [],
}));

export default useStore;
