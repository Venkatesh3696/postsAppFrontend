import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import Post from './Posts/Post';

const Homepage = () => {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		console.log('fetching');
		const { data } = await axios.get(`${baseUrl}/posts`);
		// console.log('data', data);
		setPosts(data.posts);
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	console.log('posts', posts);

	const displayPosts = () => {
		return (
			<ul className='flex flex-row flex-wrap '>
				{posts.map((each) => {
					return (
						<Post
							key={each.id}
							details={each}
						/>
					);
				})}
			</ul>
		);
	};

	return (
		<div>
			<Layout>{displayPosts()};</Layout>
		</div>
	);
};

export default Homepage;
