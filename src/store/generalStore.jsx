import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

export const generalStore = create((set) => ({
  firstBear: { name: 'van' },
  setFirstBear: (payload) => set((state) => ({ firstBear: payload })),

  secondBear: { age: 10 },
  setSecondBear: (payload) => set((state) => ({ secondBear: payload }))
}));
