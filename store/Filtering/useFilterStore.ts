import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IFilterSlice, createFilterSlice } from './createFilterSlice';



type StoreState = IFilterSlice;

export const useLocationStore = create<StoreState>()(persist((...a) => ({
    ...createFilterSlice(...a)
}),
 {
     name: "filter_",
     storage:  createJSONStorage(() => localStorage),
 }
))