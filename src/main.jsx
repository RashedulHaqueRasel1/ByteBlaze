import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPages from './Components/MainPages/MainPages.jsx';
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import BookMarks from './Pages/BookMarks.jsx';
import Blog from './Pages/Blog.jsx';
import Content from './Components/Content/Content.jsx';
import Author from './Components/Author/Author.jsx';
import { Toaster } from 'react-hot-toast';
 



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages></MainPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=1'),
      },
      {
        path: "/blog/:id",
        element: <Blog ></Blog>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index:true ,
            element: <Content></Content>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author' ,
            element: <Author></Author>,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
      },
      {
        path: "/bookmarks",
        element: <BookMarks></BookMarks>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </React.StrictMode>,
)
