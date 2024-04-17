import { useState } from 'react';

import './App.css';
import { Button } from './components/Button';
import { InputCheck, InputText } from './components/Input';
import Item from './components/Item';
import { Grid } from './components/Grid';

function App() {
	const [datas, setDatas] = useState([
		{ value: 1, isDelete: false, isSelect: false, status: 'todo' },
		{ value: 2, isDelete: false, isSelect: false, status: 'in-progress' },
		{ value: 3, isDelete: false, isSelect: true, status: 'done' },
		{ value: 4, isDelete: false, isSelect: false, status: 'todo' },
		{ value: 5, isDelete: false, isSelect: false, status: 'todo' },
		{ value: 6, isDelete: false, isSelect: false, status: 'todo' },
	]);

	const [value, setValue] = useState('');
	const [isSelect, setIsSelect] = useState(false);

	let selected = datas.filter((event) => {
		return event.isSelect === true;
	});

	console.log(selected);
	const getData = (index, value, name) => {
		switch (name) {
			case 'value':
				datas[index].value = value;
				break;
			case 'isDelete':
				datas[index].isDelete = value;
				let arrs = datas.filter((arr) => {
					return arr.isDelete === false;
				});
				setDatas(arrs);
				break;
			case 'status':
				datas[index].status = value;
				break;
			case 'isSelect':
				datas[index].isSelect = value;
				break;
			default:
				break;
		}
		// if (typeof name === 'value') {
		// } else if (name === 'isDelete') {
		// } else if (name === 'status') {
		// } else {
		// }
		console.log(datas);
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

			setDatas([...datas, data]);
			setValue('');
		}
	};

	const handleDeleteSelected = () => {
		let arrs = datas.filter((arr) => {
			return arr.isSelect === false;
		});
		setDatas(arrs);
		console.log(arrs);
		setIsSelect(false);
		console.log('aaa');
	};

	const handleInputCheck = (event) => {
		setIsSelect(event.target.checked);
		let arr = datas.map((data) => {
			data.isSelect = event.target.checked;
			return data;
		});

		setDatas(arr);
		console.log(datas);
	};

	return (
		<div className='w-9/12 mx-auto'>
			<Grid>
				<InputText onChange={onChange} value={value} className='col-span-9' />
				<Button onClick={handleTambah} className='col-span-3'>
					Tambah
				</Button>
			</Grid>
			<Grid>
				<span>No</span>
				<span>Status</span>
				<span className='col-span-7'>Text</span>
				<span>Edit</span>
				<span>Delete</span>
				<InputCheck onChange={handleInputCheck} checked={isSelect} />
			</Grid>
			{datas.map((data, index) => {
				return (
					<Grid key={Math.random()}>
						<Item data={data} index={index} getData={getData} />
					</Grid>
				);
			})}
			<div className='text-right'>
				<Button onClick={handleDeleteSelected} className='px-4 bg-red-200'>
					Delete Selected
				</Button>
			</div>
		</div>
	);
}

export default App;
