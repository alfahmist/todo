const Board = ({ datas, status }) => {
	const newDatas = datas.filter((data) => data.status === status);
	console.log(datas);
	return (
		<>
			<div>
				<h1>{status[0].toUpperCase() + status.slice(1)}</h1>
				<span className='mr-2'>No</span>
				<span>Text</span>
				<div className='flex flex-col'>
					{newDatas.map((data, index) => {
						return (
							<>
								<div className='flex flex-row gap-6'>
									<span>{index + 1}. </span>
									<h1 key={data.id + data}>{data.value}</h1>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Board;
