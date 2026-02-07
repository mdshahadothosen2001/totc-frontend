import { create } from "zustand";

type NavState = {
  active: string;
  setActive: (href: string) => void;
  reset: () => void;
};

const useNavStore = create<NavState>((set) => ({
  active: typeof window !== "undefined" ? window.location.pathname : "/",
  setActive: (href: string) => set({ active: href }),
  reset: () => set({ active: "/" }),
}));

export default useNavStore;
