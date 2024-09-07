import React,{useState} from 'react'
import '../LoginPage/login.css';


const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  
	const handleUsernameChange = (e) => {
	  setUsername(e.target.value);
	};
  
	const handlePasswordChange = (e) => {
	  setPassword(e.target.value);
	};
  
	const handleSignIn = async (e) => {
	  e.preventDefault();
  
	  try {
		const response = await fetch('http://localhost:3001/api/login', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			username,
			password,
		  }),
		});
  
		if (response.ok) {
		  // Handle successful login (e.g., store the token and redirect)
		  const data = await response.json();
		  window.location.href = '/';
		  console.log('Login successful:', data);
		} else {
		  // Handle login error (e.g., display an error message)
		  const errorData = await response.json();
		  console.error('Login failed:', errorData.error);
		}
	  } catch (error) {
		console.error('Login failed:', error);
	  }
	};
	
	/* const [userData, setUserData] = useState(null);

	// useEffect hook to fetch data when the component mounts
	useEffect(() => {
	  // Fetch user data when the component mounts
	  axios.get('http://localhost:3000/api/user-data')
		.then((response) => {
		  // Handle the successful response
		  setUserData(response.data);
		})
		.catch((error) => {
		  // Handle any errors
		  console.error('Error fetching user data:', error);
		});
	}, []); // The empty dependency array means this effect runs once when the component mounts
   */
  return (
    <div class="limiter">
		<div class="container-login100" >
			<div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<form class="login100-form validate-form flex-sb flex-w">
					
					<span class="login100-form-title p-b-53">
						Sign In With
					</span>

					<a href="#" class="btn-face m-b-20">
						<i class="fa fa-facebook-official"></i>
						Facebook
					</a>

					<a href="#" class="btn-google m-b-20">
						<img src="images/icons/icon-google.png" alt="GOOGLE"/>
						Google
					</a>
					
					<div class="p-t-31 p-b-9">
						<span class="txt1">
							Username
						</span>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Username is required">
						<input class="input100" type="text" name="username" value={username}
                onChange={handleUsernameChange}/ >
						<span class="focus-input100"></span>
					</div>
					
					<div class="p-t-13 p-b-9">
						<span class="txt1">
							Password
						</span>

						<a href="#" class="txt2 bo1 m-l-5">
							Forgot?
						</a>
					</div>
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" 
                 value={password}
                onChange={handlePasswordChange}/ >
						<span class="focus-input100"></span>
					</div>

					<div class="container-login100-form-btn m-t-17">
						<button class="login100-form-btn" onClick={handleSignIn}>
							Sign In
						</button>
					</div>

					<div class="w-full text-center p-t-55">
						<span class="txt2">
							Not a member?
						</span>

						<a href="#" class="txt2 bo1">
							Sign up now
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Login
