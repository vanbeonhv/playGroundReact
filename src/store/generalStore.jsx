import { produce } from 'immer';
import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

export const generalStore = create((set) => ({
  firstBear: { name: 'van' },
  setFirstBear: (payload) => set((state) => ({ firstBear: payload })),

  secondBear: { age: 10 },
  setSecondBear: (payload) => set((state) => ({ secondBear: payload }))
}));

export const trade5Store = create((set) => ({
  averageScore: 0,
  findingDetailList: [
    {
      severityPoint: 0,
      frequencyPoint: 0,
      points: 0,
      findingReport: '',
      image: []
    },
    {
      severityPoint: 0,
      frequencyPoint: 0,
      points: 0,
      findingReport: '',
      image: []
    }
  ],
  setFindingDetailProperty: (index, property, payload) =>
    set(
      produce((draft) => {
        draft.findingDetailList[index][property] = payload;
      })
    )
}));
