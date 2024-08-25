import { Routes, Route } from 'react-router-dom';

import './App.css';
import axios from 'axios';
import Homepage from './components/Homepage';
import CreatePost from './components/Posts/CreatePost';
import ViewPost from './components/Posts/ViewPost';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='/create'
					element={<CreatePost />}
				/>
				<Route
					path='/posts/:id'
					element={<ViewPost />}
				/>
			</Routes>
		</>
	);
}

export default App;
