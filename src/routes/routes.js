import Inicio from '../pages/menu';
import Login from '../pages/login';
import Menuadmin from '../pages/admin/menu';
import Clientesadmin from '../pages/admin/clientes';
import Mapaslogin from '../pages/admin/mapas';
import Estadisticas from '../pages/admin/estadisticas';
import Contacto from '../pages/contacto';
import Masterplan from '../pages/masterplan';
import Urbanizacion from '../pages/urbanizacion';
import Espacios from '../pages/espaciospublicos';
import Ubicacion from '../pages/ubicacion';
import Home from '../pages/home';
import UrbanizacinAbierta from '../pages/urba/Urba.js';

const Rutas = [

	{ path: '/', element: <Inicio/> },

	{ path: '/login', element: <Login/> },
	{ path: "/home", element: <Home/>},
	{ path: "/urba", element: <UrbanizacinAbierta/>},
	{ path: '/admin/lotes', element: <Menuadmin/> },
	{ path: '/admin/datos', element: <	Clientesadmin/> },
	{ path: '/admin/mapas', element: <	Mapaslogin/> },
	{ path: '/admin/estadisticas', element: <	Estadisticas/> },
	{ path: '/estadisticas', element: <	Contacto/> },
	{ path: '/masterplan', element: <	Masterplan/> },
	{ path: '/urbanizacion-abierta', element: <	Urbanizacion/> },
	{ path: '/espacios-publicos', element: <	Espacios/> },
	{ path: '/ubicacion', element: <	Ubicacion/> },
	{ path: '/contacto', element: <	Contacto/> },
	


];


export default Rutas;