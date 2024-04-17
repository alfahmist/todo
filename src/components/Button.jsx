export const Button = ({ onClick, children, className }) => (
	<button onClick={onClick} className={`hover:bg-slate-200 ${className}`}>
		{children}
	</button>
);
