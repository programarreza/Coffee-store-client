import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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
		<div className="px-24">
			<div>
				Our Popular Products
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