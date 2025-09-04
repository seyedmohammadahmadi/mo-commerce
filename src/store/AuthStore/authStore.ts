import { create } from "zustand";

type User = {
  id: number;
  username: string;
  role: "ADMIN" | "CUSTOMER";
};

interface UserState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const storageKey = "loggedInUser";

export const useUserStore = create<UserState>((set) => ({
  user: (() => {
    try {
      const storedUser = localStorage.getItem(storageKey);
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  })(),

  login: (user) => {
    localStorage.setItem(storageKey, JSON.stringify(user));
    set({ user });
  },

  logout: () => {
    localStorage.removeItem(storageKey);
    set({ user: null });
  },
}));
