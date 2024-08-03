import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import About from './About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './Not_found.jsx';

import { ThemeProvider } from './context/theme_context.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
          <RouterProvider router={router} />
    </ThemeProvider>

  </React.StrictMode>,
)
