import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/product',
				element: <Product />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
