import { create } from 'zustand';
import { data } from '../data/data';

export const useBearStore = create((set) => ({
	arrOfObj: data,

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
		set((state) => ({
			arrOfObj: state.arrOfObj.map((obj) => {
				if (obj.id === id) obj.isSelect = isSelect;
				return obj;
			}),
		}));
	},

	deleteSelected: () => {
		set((state) => ({
			arrOfObj: state.arrOfObj
				.map((obj) => {
					obj.isDelete = obj.isSelect;
					return obj;
				})
				.filter((obj) => {
					return obj.isDelete === false;
				}),
		}));
	},
	setStatus: (id, status) => {
		set((state) => ({
			arrOfObj: state.arrOfObj.map((obj) => {
				if (obj.id === id) obj.status = status;
				return obj;
			}),
		}));
	},
	selectAll: (select) => {
		set((state) => ({
			arrOfObj: state.arrOfObj.map((obj) => {
				obj.isSelect = select;
				return obj;
			}),
		}));
	},
}));
