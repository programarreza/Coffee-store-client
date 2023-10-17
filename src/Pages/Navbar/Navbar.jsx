import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div
			className=" flex justify-between items-center px-24 py-1 text-3xl bg-[url('https://i.ibb.co/7CCvNbP/15.jpg')] bg-cover bg-center">

			<div className="text-center flex items-center justify-center">
				<img className="w-14" src="https://i.ibb.co/FDjXCVr/logo1.png" alt="" />
				<h2 className="text-3xl text-white">Espresso Emporium</h2>
			</div>
			<div>
				<Link to={"/login"}>
					<button className="text-white">Login</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;