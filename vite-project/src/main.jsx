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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"AboutUs",
    element : <AboutUs/>

  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
