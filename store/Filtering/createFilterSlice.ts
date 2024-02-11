import { StateCreator } from "zustand";

export interface IFilterSlice {
    year: '',
    level: '',
    materialType: '',
    updateFilter: (key: string, value: string) => void
}

export const createFilterSlice: StateCreator<IFilterSlice> = (set, get) => ({
year: '',
  level: '',
  materialType: '',
  updateFilter: (key, value) => set((state) => ({ ...state, [key]: value })),
})