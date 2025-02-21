import { useEffect, useState, createContext, useContext } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Import's Pages
import App from './App';
import { ConstructionPage } from './pages/construction/ConstructionPage';
import { HomePage } from './pages/home/HomePage';

// Create Context
const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const Index = () => {

  /* --- STATE's --- */

  /* --- ADD AND CONFIG ROUTES --- */
  const routes = createBrowserRouter([
    {
      path: '',
      element: <App />,
      errorElement: <></>,
      children: [
        {
          path: '',
          element: <HomePage />
        }
      ]
    }
  ])

  return (
    <>
      <AuthContext.Provider value={{}}>
        <RouterProvider router={routes} />
      </AuthContext.Provider>
    </>
  )
}
