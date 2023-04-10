import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Statistics from './component/Statistics/Statistics';
import Main from './component/Main/Main';
import Details from './component/Details/Details';
import AppliedJob from './component/AppliedJob/AppliedJob';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path : "/",
        element : <Main></Main>,
        loader : () => fetch('/jobs.json'),
      },
      {
        path : "/job/:id",
        element : <Details></Details>,
        loader : () => fetch('/jobs.json')
      },
      {
        path : "/statistics",
        element : <Statistics></Statistics>
      },
      {
        path : "/jobs",
        element : <AppliedJob></AppliedJob>,
        loader : () => fetch('/jobs.json')
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
