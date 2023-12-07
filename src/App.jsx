import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout';
import { ReservationLayout } from './layouts/ReservationLayout';
import { AppContextProvider } from './contexts/AppContext'
import loadable from "@loadable/component";
import { ChargingScreen } from './components/helpers/ChargingScreen'
import { loaderHome } from './pages/HomePage';
import { loaderPublication } from './pages/PublicationPage';

const lazyComponent = (component) => {
  return loadable(() => {
    return Promise.all([
      import(`./pages/${component}.jsx`),
      new Promise(resolve => setTimeout(resolve, 1500))
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
const ReservationPage = lazyComponent('ReservationPage');
const PublicationPage = lazyComponent('PublicationPage');

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loaderHome
      },
      {
        path: "/calendario/:month/:year",
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
      },
      {
        path: "/publicacion/:id",
        element: <PublicationPage />,
        loader: loaderPublication
      }
    ]
  },
  {
    path: "/reserva/:tipo/:date",
    element: <ReservationLayout />,
    children: [
      {
        index: true,
        element: <ReservationPage />
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
