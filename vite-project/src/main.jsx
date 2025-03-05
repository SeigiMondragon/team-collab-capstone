import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom'
import AboutUs  from './AboutUsPage/AboutUs.jsx'
import Courses from './CourseCatalog/Courses.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"AboutUs",
    element : <AboutUs/>

  },
  {
    path:"Courses",
    element : <Courses/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
