import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee/AddCoffee';
import Details from '../Pages/Details/Details';
import Home from '../Pages/Home/Home';
import Update from '../Pages/Update/Update';

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
				path: "/update",
				element: <Update></Update>
			}
		]
	}
])

export default route;