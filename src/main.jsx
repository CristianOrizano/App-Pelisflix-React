import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import routers from './router/index';
import './styles/buscador.css'


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <QueryClientProvider client={queryClient}>
       <RouterProvider router={routers} />
     <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>

  </React.StrictMode>,
)
