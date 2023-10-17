import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget)
		const email = form.get('email')
		const password = form.get('password')
		console.log(email, password);

		createUser(email, password)
			.then(result => {
				console.log(result.user);
				alert('registration successful')
				
				const user = { email, createTime: result.user?.metadata?.creationTime }

				fetch('http://localhost:5000/user', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(user)
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
					})
			})
			.catch(error => {
				console.log(error);
			})
	}
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col w-[500px]">
				<div className="text-center ">
					<h1 className="text-5xl font-bold">Register now!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleRegister} className="card-body">
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

						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">Register</button>
						</div>

						<div>
							<p className="flex justify-between">Already have an account? <Link to={'/login'} className="btn-link">Login</Link></p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;