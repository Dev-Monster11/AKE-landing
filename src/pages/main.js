import * as React from "react";
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import MainNavigation from "../components/layout/Header/MainNavigation";
import Footer from "../components/layout/Footer";
import Home from "./home";

function Main() {
    return (
        <Router>
            {/* <HeaderNav /> */}
            <MainNavigation />
            <Box>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Box>
            <Footer />
        </Router>
    );
}

export default Main;
