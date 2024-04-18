import { create } from 'zustand';
import { data } from '../data/data';

export const useBearStore = create((set) => ({
	bears: { value: 0, isSelect: true },
	arrOfObj: data,
	increasePopulation: () =>
		set((state) => ({ bears: (state.bears = { value: 34 }) })),
	// Data yang dikirim dalam bentuk object
	add: (object) => set((state) => ({ arrOfObj: [...state.arrOfObj, object] })),
	deleteById: (id) => {
		set((state) => ({
			arrOfObj: state.arrOfObj.map((obj) => {
				if (obj.id === id) obj.isDelete = true;
				return obj;
			}),
		}));
	},
	updateById: (id, value) => {
		set((state) => ({
			arrofObj: state.arrOfObj.map((obj) => {
				if (obj.id === id) obj.value = value;
				return obj;
			}),
		}));
	},
	select: () => {},
	selectAll: () => {},
}));

console.log(data);
