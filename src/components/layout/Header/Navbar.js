import { useState, Fragment } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";

//const Navbar = ({mainLinks, presaleLink, bridgeLink, moreMenuLinks, comingSoonLink, handleClickContracts}) => {
const Navbar = (props) => {
    const [anchorMoreEl, setAnchorMoreEl] = useState(null);
    const menuArr = ["Home", "About ICO", "Roadmap", "Team & Partners", "Token", "Faq", "How to Buy", "News"];

    const handleCloseMoreMenu = () => {
        setAnchorMoreEl(null);
    };

    return (
        <Fragment>
            <Stack direction="row" spacing={3} alignItems="center">
                {menuArr.map((ele) => {
                    return (
                        <Button key={ele} component="a" to="/" color="inherit" size="large" sx={{ fontWeight: "bold", color: "#363636" }}>
                            {ele}
                        </Button>
                    );
                })}
            </Stack>
        </Fragment>
    );
};

export default Navbar;
