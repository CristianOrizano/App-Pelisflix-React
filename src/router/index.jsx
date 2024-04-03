import { createBrowserRouter } from 'react-router-dom';

const routes = [
    {
        path: '/',
		async lazy() {
			const { default: Navbar } = await import('../modulo/peliculas/views/navbar/Navbar');

			return {
				element: (
                    <Navbar />	
				),
			};
        },	children: [
			{
				index: true,
				async lazy() {
					const { default: Home } = await import('../modulo/peliculas/views/home/Home');
					return { Component: Home };
				},
			},
			{
				path: '/movies',
				async lazy() {
					const { default: Movie } = await import('../modulo/peliculas/views/movies/Pelicula');
					return { Component: Movie };
				},
			},
			{
				path: '/lod',
				async lazy() {
					const { default: Lod } = await import('../core/componentes/Loading');
					return { Component: Lod };
				},
			},
			{
				path: '/series',
				async lazy() {
					const { default: Series } = await import('../modulo/peliculas/views/series/Serie');
					return { Component: Series };
				},
			},
            {
				path: '/search/:query',
				async lazy() {
					const { default: Search } = await import('../modulo/peliculas/views/search/Search');
					return { Component: Search };
				},
			},
			{
				path: '/detalle/:id/:tipo',
				async lazy() {
					const { default: Detalle } = await import('../modulo/peliculas/views/detalle/Detalle');
					return { Component: Detalle };
				},
			},
		


        ]
    }
];

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(routes);