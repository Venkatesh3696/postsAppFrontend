import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
