import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
    return (
        <>
            <header id="header">
                <Header />
            </header>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout