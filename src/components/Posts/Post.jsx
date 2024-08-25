import React from 'react';

const Post = ({ details }) => {
	console.log('details', details);

	const { id, title, description } = details;

	return (
		<li className=' border-2 w-[400px] h-[300px] p-4 flex flex-col justify-between gap-2 m-auto mb-4'>
			<div>
				<h1 className='text-xl'>{title}</h1>
				<p>
					{description.length > 100
						? description.slice(0, 100) + '...'
						: description}
				</p>
			</div>
			<button>View</button>
		</li>
	);
};

export default Post;
