import * as React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

function Dashboard() {
    return (
        <Box>
            <Box>
                <Box component="img" src="back.jpg" alt="background" sx={{ width: "100%", height: { sm: "600px", xs: "auto" } }} />
            </Box>
        </Box>
    );
}

export default Dashboard;
