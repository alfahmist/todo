import { useEffect, useState } from 'react';

import './App.css';
import { Button } from './components/Button';
import { InputCheck, InputText } from './components/Input';
import Item from './components/Item';
import { Grid } from './components/Grid';
import { useBearStore } from './store/useBearStore';
import Board from './components/Board';

function App() {
	const { add, arrOfObj, deleteSelected, selectAll } = useBearStore();
	const [value, setValue] = useState('');
	const [all, setAll] = useState(false);

	const object = {
		id: arrOfObj.length + 1,
		value: value,
		isDelete: false,
		isSelect: false,
		status: 'todo',
	};

	const onChange = (event) => {
		setValue(event.target.value);
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
			<Grid className='bg-red-200'>
				<span>No</span>
				<span>Status</span>
				<span className='col-span-7'>Text</span>
				<span>Edit</span>
				<span>Delete</span>
				<InputCheck
					onChange={(event) => {
						selectAll(event.target.checked);
						setAll(!all);
					}}
					checked={all}
				/>
			</Grid>
			<Grid>
				{arrOfObj.map((data, index) => {
					return <Item key={data.id} data={data} index={index} />;
				})}
			</Grid>
			<div className='text-right'>
				<Button
					onClick={() => {
						console.log('arrOfObj');
						console.log(arrOfObj);
						deleteSelected();
						setAll(false);
					}}
					className='px-4 bg-red-200'
				>
					Delete Selected
				</Button>
			</div>
			<div className='flex flex-row justify-around'>
				<Board datas={arrOfObj} status={'todo'}></Board>
				<Board datas={arrOfObj} status={'in-progress'}></Board>
				<Board datas={arrOfObj} status={'done'}></Board>
			</div>
		</div>
	);
}

export default App;
