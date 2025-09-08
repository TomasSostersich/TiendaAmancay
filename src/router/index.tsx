import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '../layout/RootLayout';
import {
	HomePage,
	AccesoriesPage,
	AboutPage,
	AccesoriePage,
	LoginPage,
	RegisterPage,
	OrdersUserPage,
	CheckoutPage,
	ThankyouPage,
	DashboardProductsPage,
	DashboardProductSlugPage,
	DashboardOrdersPage,
	DashboardOrderPage,
} from '../pages';
import { ClientLayout } from '../layout/ClientLayout';
import { OrderUserPage } from '../pages/OrderUserPage';
import { DashboardLayout } from '../layout/DashboardLayout';
import { DashboardNewProductPage } from '../pages/dashboard/DashboardNewProductPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'products',
				element: <AccesoriesPage />,
			},
			{
				path: 'products/:slug',
				element: <AccesoriePage />,
			},
			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'registro',
				element: <RegisterPage />,
			},
			{
				path: 'account',
				element: <ClientLayout />,
				children: [
					{
						path: '',
						element: <Navigate to='/account/pedidos' />,
					},
					{
						path: 'pedidos',
						element: <OrdersUserPage />,
					},
					{
						path: 'pedidos/:id',
						element: <OrderUserPage />,
					},
				],
			},
		],
	},
	{
		path:'/checkout',
		element: <CheckoutPage />,
	},
	{
		path: '/checkout/:id/thank-you',
		element: <ThankyouPage />,
	},
	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: <Navigate to='/dashboard/productos' />,
			},
			{
				path: 'productos',
				element: <DashboardProductsPage />,
			},
			{
				path: 'productos/new',
				element: <DashboardNewProductPage />,
			},
			{
				path: 'productos/editar/:slug',
				element: <DashboardProductSlugPage />,
			},
			{
				path: 'ordenes',
				element: <DashboardOrdersPage />,
			},
			{
				path: 'ordenes/:id',
				element: <DashboardOrderPage />,
			},
		],
	},
]);