import { useState } from 'react';
import { Button } from './Button';
import { InputCheck, InputText } from './Input';
import { Select } from './Select';
import { useBearStore } from '../store/useBearStore';

const Item = ({ index, data }) => {
	const { deleteById, updateById, selectById, arrOfObj, setStatus } =
		useBearStore();
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(data.value);

	const handleInputText = (event) => {
		setValue(event.target.value);
	};

	return (
		<>
			<span>{index + 1}.</span>
			<Select
				value={data.status}
				onChange={(event) => setStatus(data.id, event.target.value)}
			/>
			<InputText
				onChange={handleInputText}
				value={value}
				disabled={isEdit ? false : true}
				className='col-span-7'
			/>
			<Button
				onClick={
					isEdit
						? () => {
								setIsEdit(false);
								updateById(data.id, value);
								console.log(data);
						  }
						: () => {
								setIsEdit(true);
						  }
				}
				className={isEdit ? 'bg-slate-200' : ''}
			>
				{isEdit ? 'Done' : 'Edit'}
			</Button>
			<Button
				onClick={() => {
					deleteById(data.id);
					console.log(data);
				}}
			>
				Delete
			</Button>
			<InputCheck
				checked={data.isSelect}
				onChange={(event) => {
					selectById(data.id, event.target.checked);
					console.log('arrOfObj');
					console.log(arrOfObj);
				}}
			/>
		</>
	);
};

export default Item;
