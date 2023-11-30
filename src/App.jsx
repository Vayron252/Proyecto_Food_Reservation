import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout';
import { AppContextProvider } from './contexts/AppContext'
import loadable from "@loadable/component";
import { ChargingScreen } from './components/helpers/ChargingScreen'

const lazyComponent = (component) => {
  return loadable(() => {
    return Promise.all([
      import(`./pages/${component}.jsx`),
      new Promise(resolve => setTimeout(resolve, 1000))
    ])
    .then(([moduleExports]) => moduleExports);
  }, {
    fallback: <ChargingScreen />
  });
}

const HomePage = lazyComponent('HomePage');
const CalendarPage = lazyComponent('CalendarPage');
const FoodPage = lazyComponent('FoodPage');
const ProfilePage = lazyComponent('ProfilePage');
const PromotionPage = lazyComponent('PromotionPage');

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
