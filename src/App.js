import { useEffect, useState } from 'react';

import './App.css';
import { Button } from './components/Button';
import { InputCheck, InputText } from './components/Input';
import Item from './components/Item';
import { Grid } from './components/Grid';
import { useBearStore } from './store/useBearStore';

function App() {
	const { add, arrOfObj, deleteSelected } = useBearStore();
	const [value, setValue] = useState('');
	const [arr, setArr] = useState([]);
	useEffect(() => {
		setArr(arrOfObj);
	}, []);
	const object = {
		id: arrOfObj.length + 1,
		value: value,
		isDelete: false,
		isSelect: false,
		status: 'todo',
	};

	// const [datas, setDatas] = useState([
	// 	{ value: 1, isDelete: false, isSelect: false, status: 'todo' },
	// 	{ value: 2, isDelete: false, isSelect: false, status: 'in-progress' },
	// 	{ value: 3, isDelete: false, isSelect: true, status: 'done' },
	// 	{ value: 4, isDelete: false, isSelect: false, status: 'todo' },
	// 	{ value: 5, isDelete: false, isSelect: false, status: 'todo' },
	// 	{ value: 6, isDelete: false, isSelect: false, status: 'todo' },
	// ]);
	const [isSelect, setIsSelect] = useState(false);

	const getData = (index, value, name) => {
		switch (name) {
			case 'value':
			// datas[index].value = value;
			// break;
			case 'isDelete':
				// datas[index].isDelete = value;
				// let arrs = datas.filter((arr) => {
				// 	return arr.isDelete === false;
				// });
				// setDatas(arrs);
				break;
			case 'status':
				// datas[index].status = value;
				break;
			case 'isSelect':
				// datas[index].isSelect = value;
				break;
			default:
				break;
		}
		// if (typeof name === 'value') {
		// } else if (name === 'isDelete') {
		// } else if (name === 'status') {
		// } else {
		// }
		// console.log(datas);
	};

	const onChange = (event) => {
		setValue(event.target.value);
	};

	const handleTambah = () => {
		if (value !== '') {
			setValue(value);
			console.log(value);
			let data = {
				value: value,
				isDelete: false,
				isSelect: false,
				status: 'todo',
			};

			// setDatas([...datas, data]);
			setValue('');
		}
	};

	const handleDeleteSelected = () => {
		// let arrs = datas.filter((arr) => {
		// 	return arr.isSelect === false;
		// });
		// setDatas(arrs);
		// console.log(arrs);
		setIsSelect(false);
	};

	const handleInputCheck = (event) => {
		setIsSelect(event.target.checked);
		// let arr = datas.map((data) => {
		// 	data.isSelect = event.target.checked;
		// 	return data;
		// });

		// setDatas(arr);
	};

	return (
		<div className='w-9/12 mx-auto'>
			<Grid>
				<InputText onChange={onChange} value={value} className='col-span-9' />
				<Button
					onClick={() => {
						if (value !== '') add(object);
					}}
					className='col-span-3'
				>
					Tambah
				</Button>
			</Grid>
			{/* <Grid>
				<span>No</span>
				<span>Status</span>
				<span className='col-span-7'>Text</span>
				<span>Edit</span>
				<span>Delete</span>
				<InputCheck onChange={handleInputCheck} checked={isSelect} />
			</Grid> */}
			<Grid>
				{arr
					.filter((obj) => obj.isDelete === false)
					// .filter((obj) => obj.isSelect === false)
					.map((data, index) => {
						return <Item key={data.id} data={data} index={index} />;
					})}
			</Grid>
			<div className='text-right'>
				<Button
					onClick={() => {
						console.log('arrOfObj');
						console.log(arrOfObj);
						deleteSelected();
						const arra = arrOfObj.filter((data) => data.isSelect !== true);
						console.log(arra);
						setArr(arra);
					}}
					className='px-4 bg-red-200'
				>
					Delete Selected
				</Button>
			</div>
		</div>
	);
}

export default App;
