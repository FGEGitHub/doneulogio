import Inicio from '../pages/menu';
import Login from '../pages/login';
import Menuadmin from '../pages/admin/menu';
import Clientesadmin from '../pages/admin/clientes';





const Rutas = [

	{ path: '/', element: <Inicio/> },

	{ path: '/login', element: <Login/> },

	{ path: '/admin/lotes', element: <Menuadmin/> },
	{ path: '/admin/clientes', element: <	Clientesadmin/> },

];


export default Rutas;