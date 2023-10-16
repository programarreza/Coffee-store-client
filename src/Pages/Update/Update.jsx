import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

	const loadedCoffee = useLoaderData();
	const { _id, name, chef, supplier, taste, category, details, photo } = loadedCoffee;

	const handleUpdateCoffee = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get('name');
		const chef = form.get('chef');
		const supplier = form.get('supplier');
		const taste = form.get('taste');
		const category = form.get('category');
		const details = form.get('details');
		const photo = form.get('photo');
		console.log(name, chef, supplier, taste, category, details, photo);

		const coffee = { name, chef, supplier, taste, category, details, photo }

		fetch(`http://localhost:5000/coffee/${_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(coffee)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire(
						'Good job!',
						'You clicked the button!',
						'success'
					)
				}
			})
	}

	return (
		<div className=" w-full h-[80vh] py-1 text-3xl bg-[url('https://i.ibb.co/GTMN4ZX/11-3-1.png')] bg-cover bg-center">
			<form onSubmit={handleUpdateCoffee} className=" mx-24 p-12 bg-[#F4F3F0]">
				<div>
					<h2 className="text-3xl font-semibold text-center">Update Existing Coffee Details</h2>
					<p className="text-sm text-center px-24">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
				</div>
				{/* name and chef */}
				<div className="flex gap-4">
					<div className="form-control w-1/2 ">
						<label className="label">
							<span className="label-text text-xl font-semibold">Name</span>
						</label>
						<label className="">
							<input type="text" name="name" placeholder="Enter coffee name" defaultValue={name} className="input input-bordered w-full" />
						</label>
					</div>
					<div className="form-control w-1/2 ">
						<label className="label">
							<span className="label-text font-semibold text-xl">Chef</span>
						</label>
						<label className="">
							<input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full" />
						</label>
					</div>
				</div>
				{/* Supplier and Taste */}
				<div className="flex gap-4">
					<div className="form-control w-1/2 ">
						<label className="label">
							<span className="label-text text-xl font-semibold">Supplier</span>
						</label>
						<label className="">
							<input type="text" name="supplier" placeholder="Enter coffee Supplier" defaultValue={supplier} className="input input-bordered w-full" />
						</label>
					</div>
					<div className="form-control w-1/2 ">
						<label className="label">
							<span className="label-text font-semibold text-xl">Taste</span>
						</label>
						<label className="">
							<input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee Taste" className="input input-bordered w-full" />
						</label>
					</div>
				</div>
				{/* Category and Details */}
				<div className="flex gap-4">
					<div className="form-control w-1/2 ">
						<label className="label">
							<span className="label-text text-xl font-semibold">Category</span>
						</label>
						<label className="">
							<input type="text" name="category" defaultValue={category} placeholder="Enter coffee Category" className="input input-bordered w-full" />
						</label>
					</div>
					<div className="form-control w-1/2 ">
						<label className="label">
							<span className="label-text font-semibold text-xl">Details</span>
						</label>
						<label className="">
							<input type="text" name="details" defaultValue={details} placeholder="Enter coffee Details" className="input input-bordered w-full" />
						</label>
					</div>
				</div>
				{/* Enter photo URL */}
				<div className="flex gap-4">
					<div className="form-control w-full ">
						<label className="label">
							<span className="label-text text-xl font-semibold">Photo</span>
						</label>
						<label className="">
							<input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
						</label>
					</div>
				</div>
				{/* Submit btn */}
				<div className="flex gap-4">
					<div className="form-control w-full ">
						<input type="submit" value="Update Coffee Details" className="py-2 mt-6 cursor-pointer text-2xl rounded-md border-[#331A15] bg-[#D2B48C]" />
					</div>
				</div>
			</form>
		</div>
	);
};

export default Update;