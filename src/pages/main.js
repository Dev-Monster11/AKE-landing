import * as React from "react";
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Dashboard from "./dashboard";
import HeaderNav from "../components/header_nav";

function Main() {
    return (
        <Router>
            <HeaderNav />
            <Box>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default Main;
