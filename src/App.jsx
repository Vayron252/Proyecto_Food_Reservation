import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CalendarPage } from './pages/CalendarPage'
import { FoodPage } from './pages/FoodPage'
import { ProfilePage } from './pages/ProfilePage'
import { PromotionPage } from './pages/PromotionPage'
import { MainLayout } from './layouts/MainLayout';
import { AppContextProvider } from './contexts/AppContext'

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
        path: "/promociones",
        element: <PromotionPage />
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
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  )
}
