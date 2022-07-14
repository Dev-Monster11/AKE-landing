import * as React from "react";
import { useState, useEffect } from "react";
import { Box, List, ListItem } from "@mui/material";

function HeaderNav() {
    const flexContainer = {
        display: "flex",
        flexDirection: "row",
        padding: 0,
    };
    return (
        <Box>
            <List style={flexContainer}>
                <ListItem>aaa</ListItem>
                <ListItem>aaa</ListItem>
            </List>
        </Box>
    );
}

export default HeaderNav;
