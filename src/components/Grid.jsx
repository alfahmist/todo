export const Grid = ({ children }) => {
	return (
		// <div className='flex flex-row gap-2 mb-1 justify-around'>{children}</div>
		<div className='grid grid-cols-12 text-center mb-2'>{children}</div>
	);
};
