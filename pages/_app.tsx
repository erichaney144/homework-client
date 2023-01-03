import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS
import type { AppProps } from 'next/app';
import { useEffect, useState } from "react";
import Layout from '../components/Layout';
import LoginDialog from '../components/login/LoginDialog';
import LogoutConfirmationDialog from '../components/login/LogoutConfirmationDialog';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	const [user, setUser] = useState(null)
	const [cart, setCart] = useState({items: []})
	const [orderId, setOrderId] = useState(null)

	pageProps.user = user
	pageProps.setUser = setUser
	pageProps.cart = cart
	pageProps.setCart = setCart
	pageProps.orderId = orderId
	pageProps.setOrderId = setOrderId

	return (
	  <Layout title="Music Store (Symetra Homework)" user={user} setUser={setUser}>
			<Component {...pageProps} />
			<LoginDialog user={user} setUser={setUser}/>
			<LogoutConfirmationDialog/>
		</Layout>
	)
}
