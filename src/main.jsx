import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Home } from './page/Home.jsx'
import { About } from './page/About.jsx'
import { Skill } from './page/Skill.jsx'
import { Project } from './page/Project.jsx'
import { Contact } from './page/Contact.jsx'

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
            { 
               path: '/Skill', 
               element: <Skill/>,
            },
            { 
               path: '/Project', 
               element: <Project/>,
            },
            { 
               path: '/Contact', 
               element: <Contact/>,
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