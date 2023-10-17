import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Product = () => {
	const [coffees, setCoffees] = useState([])


	useEffect(() => {
		fetch('http://localhost:5000/coffee')
			.then(res => res.json())
			.then(data => {
				setCoffees(data);
			})
	}, [])

	return (
		<div className="px-24 bg-[url('https://i.postimg.cc/C5ndcPY4/1.png')] bg-center bg-cover">
			<div className="text-center ">
				<p>--- Sip & Savor ---</p>
				<h2 className="text-5xl text-[#331A15] mb-4">Our Popular Products</h2>
				<Link to={"/addCoffee"}><button className="text-2xl bg-[#E3B577] border-2 border-[#331A15] rounded-md p-2">Add Coffee</button></Link>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				{
					coffees.map(coffee => <ProductCard key={coffee._id} coffee={coffee}></ProductCard>)
				}
			</div>

		</div>
	);
};

export default Product;