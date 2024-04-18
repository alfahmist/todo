import { useState } from 'react';
import { Button } from './Button';
import { InputText } from './Input';

const InputTambah = (props) => {
	const { tambahData } = useBearStore();
	const [value, setValue] = useState('');

	const handlerInput = (event) => {
		setValue(event.target.value);
	};

	const handlerTambah = () => {
		if (value !== '') {
			setValue(value);
			props.getValue(value);
		}
		setValue('');
	};

	return (
		<div className='flex justify-center'>
			<InputText onChange={handlerInput} value={value} />
			<Button onClick={handlerTambah}>Tambah</Button>
		</div>
	);
};

export default InputTambah;
