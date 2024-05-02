import { create } from 'zustand';

interface Store {
  email: string;
  setEmail: (email: string) => void;
  name: string;
  setName: (name: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
  password: string;
  setPassword: (password: string) => void;
  country: string;
  setCountry: (country: string) => void;
  dino: string;
  setDino: (dino: string) => void;
}

export const useSignupStore = create<Store>()((set) => ({
  email: '',
  setEmail: (email: string) => set({ email: email }),
  name: '',
  setName: (name: string) => set({ name: name }),
  nickname: '',
  setNickname: (nickname: string) => set({ nickname: nickname }),
  password: '',
  setPassword: (password: string) => set({ password: password }),
  country: '',
  setCountry: (country: string) => set({ country: country }),
  dino: '',
  setDino: (dino: string) => set({ dino: dino }),
}));
