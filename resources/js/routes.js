const Home = ()=> import('./components/Home.vue')
const Contacto = ()=> import('./components/Contacto.vue')

//Componentes de Empleado
const Crear = ()=> import('./components/empleado/Crear.vue')
const Editar = ()=> import('./components/empleado/Editar.vue')
const Mostrar = ()=> import('./components/empleado/Mostrar.vue')

export const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'contacto',
        path:'/contacto',
        component:Contacto
    },
    //Rutas de Empleado
    {
        name:'crear',
        path:'/crearEmpleado',
        component:Crear
    },
    {
        name:'editar',
        path:'/editarEmpleado/:id',
        component:Editar
    },
    {
        name:'mostrar',
        path:'/mostrarEmpleados',
        component:Mostrar
    },
]