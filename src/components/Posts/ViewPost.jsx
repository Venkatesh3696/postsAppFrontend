import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../config/baseUrl';

const ViewPost = () => {
	const [postData, setPostData] = useState(null);
	const { id } = useParams();

	const fetchPosts = async () => {
		console.log('fetching');
		const { data } = await axios.get(`${baseUrl}/posts/${id}`);

		console.log('postData', postData);
		setPostData({ ...data.post });
	};

	useEffect(() => {
		fetchPosts();
		console.log('view post');
	}, []);
	return (
		<>
			{postData === null ? (
				<h1>Loading</h1>
			) : (
				<div>
					<h1>Title: </h1>
					<br />
					<h1>{postData.title}</h1>
					<br />
					<p>{postData.description}</p>
					<br />
				</div>
			)}
		</>
	);
};

export default ViewPost;
