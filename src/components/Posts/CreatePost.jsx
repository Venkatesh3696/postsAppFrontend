import React, { useState } from 'react';
import Layout from '../Layout';
import axios from 'axios';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const createPost = async () => {
		const result = await axios.post(`${baseUrl}/posts`, {
			title,
			description,
		});
		setTitle('');
		setDescription('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Layout>
			<form
				className='flex flex-col p-5'
				onSubmit={createPost}
			>
				<label htmlFor='title'>Title</label>
				<input
					className='w-[600px] border-1'
					id='title'
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					className='w-full h-auto'
					rows={10}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>
		</Layout>
	);
};

export default CreatePost;
