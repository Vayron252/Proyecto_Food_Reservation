import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { HomePage } from './pages/HomePage'
// import { CalendarPage } from './pages/CalendarPage'
// import { FoodPage } from './pages/FoodPage'
// import { ProfilePage } from './pages/ProfilePage'
// import { PromotionPage } from './pages/PromotionPage'
import { MainLayout } from './layouts/MainLayout';
import { AppContextProvider } from './contexts/AppContext'

// const HomePage = () => lazy(() => import('./pages/HomePage'));
// const HomePage = () => React.lazy(() => import('./pages/HomePage'))
const HomePage = lazy(() => import('./pages/HomePage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const FoodPage = lazy(() => import('./pages/FoodPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const PromotionPage = lazy(() => import('./pages/PromotionPage'));

export async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        // lazy: () => import('./pages/HomePage')
        // async lazy() {
        //   const { HomePage } = await import("./pages/HomePage");
        //   // await wait(10000);
        //   return { Component: HomePage };
        // }
        element: <HomePage />
      },
      {
        path: "/calendario",
        element: <CalendarPage />
        // async lazy() {
        //   const { CalendarPage } = await import("./pages/CalendarPage");
        //   return { Component: CalendarPage };
        // }
      },
      {
        path: "/productos/:categoria",
        element: <FoodPage />
        // async lazy() {
        //   const { FoodPage } = await import("./pages/FoodPage");
        //   return { Component: FoodPage };
        // }
      },
      {
        path: "/promociones",
        element: <PromotionPage />
        // async lazy() {
        //   const { PromotionPage } = await import("./pages/PromotionPage");
        //   return { Component: PromotionPage };
        // }
      },
      {
        path: "/perfil",
        element: <ProfilePage />
        // async lazy() {
        //   const { ProfilePage } = await import("./pages/ProfilePage");
        //   return { Component: ProfilePage };
        // }
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
