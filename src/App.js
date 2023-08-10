import React from "react"
import ReactDOM, { createRoot } from "react-dom/client";
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import About from './components/About';
import Restaurant from "./components/Restaurant.js";
import Profile from './components/Profile.js';
import Weather from './components/Weather.js';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return(
    <>
    <Weather />
    <Profile />
    <Header />
    <Outlet />
    <Footer />
    </>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />
            }, 
            {
            path:"/about",
            element: <About />
            },
            {
            path:"/restaurant/:id",
            element: <Restaurant />
            }
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router = {appRouter}/> );

