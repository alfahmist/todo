import { create } from 'zustand';
import { data } from '../data/data';

export const useBearStore = create((set) => ({
	bears: { value: 0, isSelect: true },
	arrOfObj: data,
	increasePopulation: () =>
		set((state) => ({ bears: (state.bears = { value: 34 }) })),
	// Data yang dikirim dalam bentuk object
	add: (object) => set((state) => ({ arrOfObj: [...state.arrOfObj, object] })),
	delete: () => {},
	done: () => {},
	select: () => {},
	selectAll: () => {},
}));

console.log(data);
