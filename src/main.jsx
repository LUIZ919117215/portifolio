import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useRouteError  } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Menu } from './components/Menu.jsx'
import { Home } from './page/Home.jsx'
import { About } from './page/About.jsx'

const routers = createBrowserRouter(
   [
      {
         path: '/',
         element: <App/>,
         children: [
            { 
               path: '/', 
               element: <Home/>,
            },
            { 
               path: '/About', 
               element: <About/>,
            },
         ],
      },
   ],
)

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={routers}/>
   </StrictMode>,
)
