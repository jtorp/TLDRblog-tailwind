import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div className="m-0 p-0 w-screen">
            <Header name={"TL;DR"} />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
