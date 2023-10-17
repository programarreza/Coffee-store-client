import PropTypes from 'prop-types';
import { FaPen, FaRegEye } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const ProductCard = ({ coffee }) => {
	console.log(coffee);
	const { _id, category, chef, photo, details, name, supplier, taste } = coffee;

	const handleDelete = (_id) => {

		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/coffee/${_id}`, {
					method: 'DELETE',
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire(
								'Deleted!',
								'Your file has been deleted.',
								'success'
							)
						}
					})

			}
		})



	}

	return (
		<div>
			<div className="card card-side bg-base-200 shadow-lg ">
				<figure><img src={photo} className="w-40" alt="Movie" /></figure>
				<div className="card-body">
					<div className="flex justify-between">
						<div>
							<p><span className="text-xl font-semibold">Name:</span> {name}</p>
							<p><span className="text-xl font-semibold">Chef:</span> {chef}</p>
							<p><span className="text-xl font-semibold">Price:</span> 890 Taka</p>
						</div>
						<div className=" justify-end">
							<div className="join join-vertical space-y-2 ">
								<button className="btn join-item text-xl bg-[#D2B48C] text-white "><FaRegEye /></button>
								<Link to={`/update/${_id}`}><button className="btn join-item text-lg text-white bg-[#3C393B]"><FaPen /></button></Link>
								<button onClick={() => handleDelete(_id)} className="btn join-item text-xl text-white bg-[#EA4744] "><MdOutlineDeleteOutline /></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;

ProductCard.propTypes = {
	coffee: PropTypes.node
}