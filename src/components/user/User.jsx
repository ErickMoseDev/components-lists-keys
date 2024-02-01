import './user.css';

export default function User({
	firstname = 'John',
	lastname = 'Doe',
	email = 'johndoe@gmail.com',
	phoneNumber = '0712345678',
	imageUrl = 'https://ui-avatars.com/api/?name=John+Doe',
}) {
	return (
		<div className="user-container">
			<UserImage imageUrl={imageUrl} />
			<UserDetails objKey={'First name'} value={firstname} />
			<UserDetails objKey={'Last name'} value={lastname} />
			<UserDetails objKey={'Email address'} value={email} />
			<UserDetails objKey={'Phone number'} value={phoneNumber} />
		</div>
	);
}

function UserDetails({ objKey, value }) {
	return (
		<div className="details">
			<div className="key">
				<h4>{objKey}</h4>
			</div>
			<div className="value">{value}</div>
		</div>
	);
}

function UserImage({ imageUrl }) {
	return (
		<div className="image-container">
			<img src={imageUrl} alt="User initials" />
		</div>
	);
}

// card to contain:
// image with the user initials
// details include: firstname, lastname, emailAddress,gender and age, phonenumber
