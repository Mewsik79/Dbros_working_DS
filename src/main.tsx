import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import { createBrowserRouter, RouterProvider } from 'react-router-dom'
    import Home from './pages/Home'
    import Missions from './pages/Missions'
    import './index.css'

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/missions',
        element: <Missions />
      }
    ])

    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    )