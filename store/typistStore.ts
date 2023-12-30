import { create } from "zustand";

interface TypistStore {
  name: string;
  accuracy: number;
  speed: number;
  setName: (name: string) => void;
  setAccuracy: (accuracy: number) => void;
  setSpeed: (speed: number) => void;
}

const useTypistStore = create<TypistStore>((set) => ({
  name: "",
  accuracy: 0,
  speed: 0,
  setName: (state: string) => set({ name: state }),
  setAccuracy: (state: number) => set({ accuracy: state }),
  setSpeed: (state: number) => set({ speed: state }),
}));

export default useTypistStore;
