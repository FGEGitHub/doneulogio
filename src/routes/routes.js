import Inicio from '../pages/menu';
import Login from '../pages/login';
import Menuadmin from '../pages/admin/menu';
import Clientesadmin from '../pages/admin/clientes';
import Mapaslogin from '../pages/admin/mapas';
import Estadisticas from '../pages/admin/estadisticas';



const Rutas = [

	{ path: '/', element: <Inicio/> },

	{ path: '/login', element: <Login/> },

	{ path: '/admin/lotes', element: <Menuadmin/> },
	{ path: '/admin/datos', element: <	Clientesadmin/> },
	{ path: '/admin/mapas', element: <	Mapaslogin/> },
	{ path: '/admin/estadisticas', element: <	Estadisticas/> },
	


];


export default Rutas;