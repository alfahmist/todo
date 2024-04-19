import { create } from 'zustand';
import { data } from '../data/data';

export const useBearStore = create((set) => ({
	bears: { value: 0, isSelect: true },
	arrOfObj: data,
	// selected: [
	// 	{ id: 1, value: 1, isDelete: false, isSelect: false, status: 'todo' },
	// 	{
	// 		id: 2,
	// 		value: 2,
	// 		isDelete: false,
	// 		isSelect: false,
	// 		status: 'in-progress',
	// 	},
	// 	{ id: 3, value: 3, isDelete: false, isSelect: false, status: 'done' },
	// 	{ id: 4, value: 4, isDelete: false, isSelect: false, status: 'todo' },
	// 	{ id: 5, value: 5, isDelete: false, isSelect: false, status: 'todo' },
	// 	{ id: 6, value: 6, isDelete: false, isSelect: true, status: 'todo' },
	// ],

	increasePopulation: () =>
		set((state) => ({ bears: (state.bears = { value: 34 }) })),
	// Data yang dikirim dalam bentuk object
	add: (object) => set((state) => ({ arrOfObj: [...state.arrOfObj, object] })),
	deleteById: (id) => {
		set((state) => ({
			arrOfObj: state.arrOfObj
				.map((obj) => {
					if (obj.id === id) obj.isDelete = true;
					return obj;
				})
				.filter((obj) => {
					return obj.isDelete === false;
				}),
		}));
	},

	updateById: (id, value) => {
		set((state) => ({
			arrOfObj: state.arrOfObj.map((obj) => {
				if (obj.id === id) obj.value = value;
				return obj;
			}),
		}));
	},
	selectById: (id, isSelect) => {
		// let arr = data.map((obj) => {
		// if (obj.id === id) obj.isSelect = isSelect;
		// return obj;
		// });

		set((state) => ({
			// selected: [
			// 	...state.selected,
			// 	(state.selected[id] = { id: id, isSelect: true }),
			// ],
			// selected: state.arrOfObj,
			// arrOfObj: (state.arrofObj = [
			// 	{ id: 1, value: 1, isDelete: false, isSelect: false, status: 'todo' },
			// 	{
			// 		id: 2,
			// 		value: 2,
			// 		isDelete: false,
			// 		isSelect: false,
			// 		status: 'in-progress',
			// 	},
			// 	{ id: 3, value: 3, isDelete: false, isSelect: false, status: 'done' },
			// 	{ id: 4, value: 4, isDelete: false, isSelect: false, status: 'todo' },
			// 	{ id: 5, value: 5, isDelete: false, isSelect: false, status: 'todo' },
			// 	{ id: 6, value: 6, isDelete: false, isSelect: false, status: 'todo' },
			// ]),
			arrOfObj: state.arrOfObj.map((obj) => {
				if (obj.id === id) obj.isSelect = isSelect;
				return obj;
			}),
		}));
	},

	increment: () =>
		set((state) => ({
			count: state.count + 1,
			double: state.count,
		})),
	deleteSelected: () => {
		set(
			(state) => ({
				arrOfObj: state.arrOfObj
					.map((obj) => {
						obj.isDelete = obj.isSelect;
						return obj;
					})
					.filter((obj) => {
						return obj.isDelete === false;
					}),
			})
			// state.arrOfObj.filter((data) => {
			// 	return data.isSelect === false;
			// })
		);

		// set((state) => ({
		// 	arrOfObj: state.selected,
		// }));
	},
	setStatus: (id, status) => {
		set((state) => ({
			arrOfObj: state.arrOfObj.map((obj) => {
				if (obj.id === id) obj.status = status;
				return obj;
			}),
		}));
	},
	reset: () => set({ count: 0 }),
	selectAll: (select) => {
		set((state) => ({
			arrOfObj: state.arrOfObj.map((obj) => {
				obj.isSelect = select;
				return obj;
			}),
		}));
	},
}));
