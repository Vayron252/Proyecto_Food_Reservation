import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CalendarPage } from './pages/CalendarPage'
import { FoodPage } from './pages/FoodPage'
import { ProfilePage } from './pages/ProfilePage'
import { MainLayout } from './layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/calendario",
        element: <CalendarPage />
      },
      {
        path: "/productos/:categoria",
        element: <FoodPage />
      },
      {
        path: "/perfil",
        element: <ProfilePage />
      }
    ]
  },
  {
    path: "/login",
    element: <h2>Pantalla de login</h2>
  }
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
