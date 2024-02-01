import './App.css';
import User from './components/user/User';

const data = [
	{
		firstname: 'John',
		lastname: 'Kimani',
		email: 'kimani@gmail.com',
		phoneNumber: '0712345678',
	},
	{
		firstname: 'Michelle',
		lastname: 'Nasirisi',
		email: 'michelle@gmail.com',
		phoneNumber: '0712345677',
	},
	{
		firstname: 'John',
		lastname: 'Ouma',
		email: 'ouma@gmail.com',
		phoneNumber: '0712345676',
	},
	{
		firstname: 'Sein',
		lastname: 'Kane',
		email: 'sein@gmail.com',
		phoneNumber: '0712345673',
	},
	{
		firstname: 'Jane',
		lastname: 'Rotich',
		email: 'jane@gmail.com',
		phoneNumber: '0712345675',
	},
	{
		firstname: 'Linda',
		lastname: 'Rono',
		email: 'linda@gmail.com',
		phoneNumber: '0712345668',
	},
	{
		firstname: 'Kelvin',
		lastname: 'Kuria',
		email: 'kuria@gmail.com',
		phoneNumber: '0712343678',
	},
	{
		firstname: 'Levis',
		lastname: 'Ngigi',
		email: 'levis@gmail.com',
		phoneNumber: '0712445678',
	},
	{
		firstname: 'Linet',
		lastname: 'Chepngeno',
		email: 'linet@gmail.com',
		phoneNumber: '0732345678',
	},
	{
		firstname: 'Nestor',
		lastname: 'Masinde',
		email: 'nestor@gmail.com',
		phoneNumber: '0712545678',
	},
	{
		firstname: 'Erick',
		lastname: 'Ouma',
		email: 'erick@gmail.com',
		phoneNumber: '0712745678',
	},
	{
		firstname: 'Kimani',
		lastname: 'Ouma',
		email: 'kimeumana@gmail.com',
		phoneNumber: '0702745678',
	},
];

function App() {
	return (
		<div className="container">
			{data.map((user, index) => (
				<User
					key={user.phoneNumber + index}
					firstname={user.firstname}
					lastname={user.lastname}
					email={user.email + index}
					imageUrl={`https://ui-avatars.com/api/?background=4caf50&color=fff&name=${user.firstname}+${user.lastname}`}
					phoneNumber={user.phoneNumber}
				/>
			))}
		</div>
	);
}

export default App;
