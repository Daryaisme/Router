import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './style.css'
import Layout from './routes/Layout.js'
import Users, { loader as usersLoader } from './routes/Users.js'
import User, { loader as userLoader } from './routes/User.js'
import Albums, { loader as albumsLoader } from './routes/Albums.js'
import UserAlbum, { loader as userAlbumsloader } from './routes/UserAlbum.js'
import Error from './routes/Error.js'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: '/:id',
        element: <User />,
        loader: userLoader,
        errorElement: <Error />
      },
      {
        path: '/albums',
        element: <Albums />,
        loader: albumsLoader,
      },
      {
        path: '/albums/:id',
        element: <UserAlbum />,
        loader: userAlbumsloader,
        errorElement: <Error />
      },
      {
        path: '*',
        element: <Error />,
      }
    ]
  }
])

function App () {
  return <RouterProvider router={router} />
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

export default App
