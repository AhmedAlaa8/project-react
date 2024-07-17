import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Main from "./pages/main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HelmetProvider } from 'react-helmet-async';
import Fil from "./pages/fil";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>

    },
    {
        path: "/home",
        element: <Home/>

    },
    {
        path: "/main",
        element: <Main/>

    },
 {
        path: "/fil",
        element: <Fil/>

    },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
        <RouterProvider router={router}/>
        </HelmetProvider>
    </React.StrictMode>
);


