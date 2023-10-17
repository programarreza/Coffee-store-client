import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
	const { login } = useContext(AuthContext)

	const handleLogin = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const email = form.get('email')
		const password = form.get('password')
		console.log(email, password);

		login(email, password)
		.then(result => {
			console.log(result.user);
			alert('Login successful')
		})
		.then(error => {
			console.log(error);
		})

	}

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col w-[500px]">
				<div className="text-center ">
					<h1 className="text-5xl font-bold">Login now!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleLogin} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email" name="email" placeholder="email" className="input input-bordered" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input type="password" name="password" placeholder="password" className="input input-bordered" required />
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">Login</button>
						</div>

						<div>
							<p className="flex justify-between">Dont have an account? <Link to={'/register'} className="btn-link">Create Account</Link></p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;