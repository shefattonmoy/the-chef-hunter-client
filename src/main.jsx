import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import AuthProvider from './components/Provider/AuthProvider/AuthProvider.jsx';
import Recipe from './components/Recipe/Recipe.jsx';
import Blog from './components/Blog/Blog.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Chef from './components/Chef/Chef';
import ChefRecipe from './components/ChefRecipe/ChefRecipe';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/recipes',
        element: <Recipe></Recipe>,
        loader: ({params}) => fetch(`https://localhost:5173//recipes/${params.id}`)
      },
      {
        path: '/chef',
        element: <Chef></Chef>,
        loader: ({params}) => fetch(`https://localhost:5173/chefs/${params.chefID}`)
      },
      {
        path: '/chef_recipes',
        element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
