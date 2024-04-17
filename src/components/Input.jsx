export const InputText = ({ className, onChange, disabled, value }) => {
	return (
		<input
			type='text'
			value={value}
			onChange={onChange}
			disabled={disabled}
			className={`${className} pl-2`}
		/>
	);
};

export const InputCheck = ({
	className,
	onChange,
	defaultChecked,
	checked,
}) => {
	return (
		<input
			type='checkbox'
			onChange={onChange}
			className={className}
			defaultChecked={defaultChecked}
			checked={checked}
		/>
	);
};
