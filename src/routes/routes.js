import Inicio from '../pages/menu';
import Login from '../pages/login';
import Menuadmin from '../pages/admin/menu';






const Rutas = [

	{ path: '/', element: <Inicio/> },

	{ path: '/login', element: <Login/> },

	{ path: '/admin/menu', element: <Menuadmin/> },
	Menuadmin
];


export default Rutas;