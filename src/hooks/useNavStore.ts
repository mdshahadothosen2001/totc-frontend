import { create } from "zustand";

type NavState = {
  active: string;
  prev: string;
  setActive: (href: string) => void;
  navigate: (href: string) => void;
  reset: () => void;
};

const useNavStore = create<NavState>((set) => ({
  active: typeof window !== "undefined" ? window.location.pathname : "/",
  prev: "/",
  setActive: (href: string) => set({ active: href }),
  navigate: (href: string) =>
    set((state) => ({ prev: state.active, active: href })),
  reset: () => set({ active: "/", prev: "/" }),
}));

export default useNavStore;
