import { useState } from 'react';
import { Button } from './Button';
import { InputCheck, InputText } from './Input';
import { Select } from './Select';

const Item = ({ index, data, getData }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(data.value);

	const done = () => {
		setIsEdit(!isEdit);
		setValue(value);
		getData(index, value, 'value');
	};
	const edit = () => {
		setIsEdit(!isEdit);
	};
	const handleInputText = (event) => {
		setValue(event.target.value);
	};

	const handleDelete = () => {
		getData(index, true, 'isDelete');
	};

	const handleInputCheck = (event) => {
		getData(index, event.target.checked, 'isSelect');
	};

	const handleSelect = (event) => {
		getData(index, event.target.value, 'status');
	};
	return (
		<>
			<span>{index + 1}.</span>
			<Select value={data.status} onChange={handleSelect} />
			<InputText
				onChange={handleInputText}
				value={value}
				disabled={isEdit ? false : true}
				className='col-span-7'
			/>
			<Button
				onClick={isEdit ? done : edit}
				className={isEdit ? 'bg-slate-200' : ''}
			>
				{isEdit ? 'Done' : 'Edit'}
			</Button>
			<Button onClick={handleDelete}>Delete</Button>
			<InputCheck defaultChecked={data.isSelect} onChange={handleInputCheck} />
		</>
	);
};

export default Item;