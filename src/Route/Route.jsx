import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee/AddCoffee';
import Details from '../Pages/Details/Details';
import Home from '../Pages/Home/Home';
import Update from '../Pages/Update/Update';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const route = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout/>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/addCoffee",
				element: <AddCoffee></AddCoffee>
			},
			{
				path: "/details",
				element: <Details></Details>
			},
			{
				path: "/update/:id",
				element: <Update></Update>,
				loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			}
		]
	}
])

export default route;