import Inicio from '../pages/menu';
import Login from '../pages/login';
import Menuadmin from '../pages/admin/menu';
import Clientesadmin from '../pages/admin/clientes';
import Mapaslogin from '../pages/admin/mapas';




const Rutas = [

	{ path: '/', element: <Inicio/> },

	{ path: '/login', element: <Login/> },

	{ path: '/admin/lotes', element: <Menuadmin/> },
	{ path: '/admin/clientes', element: <	Clientesadmin/> },
	{ path: '/admin/mapas', element: <	Mapaslogin/> },
	


];


export default Rutas;