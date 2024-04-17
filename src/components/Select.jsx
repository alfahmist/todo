export const Select = ({ value, onChange }) => {
	const statusList = ['todo', 'in-progress', 'done'];
	return (
		<select defaultValue={value} onChange={onChange}>
			{statusList.map((status, index) => {
				return (
					<option value={status} key={index}>
						{status[0].toUpperCase() + status.slice(1)}
					</option>
				);
			})}
		</select>
	);
};
