import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Layout/Home';
import Login from './components/User/Login';
import UserDashboard from './components/User/UserDashboard';
import AdminDashboard from './components/Admin/Dashboard';
import { loadUser } from './redux/actions/userActions';
import store from './redux/store';
import SendOptions from './components/User/Send/SendOptions';
import Send from './components/User/Send/Send';
import ProtectedRoute from './utils/ProtectedRoute';
import Wallet from './components/User/Wallet';

function App() {
	// const { user } = useSelector((state) => state.user);

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Router>
			{/* <Navbar /> */}
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<ProtectedRoute
					exact
					path='/user/dashboard'
					component={UserDashboard}
				/>
				<ProtectedRoute exact path='/send/options' component={SendOptions} />
				<ProtectedRoute exact path='/send/send-money' component={Send} />
				<ProtectedRoute exact path='/wallet' component={Wallet} />
				<ProtectedRoute
					exact
					path='/admin/dashboard'
					component={AdminDashboard}
				/>
			</Switch>
		</Router>
	);
}

export default App;
