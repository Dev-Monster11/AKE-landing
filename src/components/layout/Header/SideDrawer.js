import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
//import Badge from '@mui/material/Badge';
//import Stack from '@mui/material/Stack';

const drawerWidth = 220;

//const SideDrawer = ({mainLinks, bridgeLink, presaleLink, moreMenuLinks, comingSoonLink, onClose, open, window, handleClickContracts}) => {
const SideDrawer = ({ onClose, open, window, handleClickContracts }) => {
    const router = useLocation();
    const container = window !== undefined ? () => window().document.body : undefined;
    const menuArr = ["Home", "About ICO", "Roadmap", "Team & Partners", "Token", "Faq", "How to Buy", "News"];

    const handleClickContractsItem = () => {
        onClose();
        handleClickContracts();
    };

    return (
        <Drawer
            container={container}
            variant="temporary"
            open={open}
            anchor="right"
            onClose={onClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                zIndex: 10000,
                display: {
                    xs: "block",
                    sm: "none",
                },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    border: 0,
                    boxShadow: "none",
                },
            }}
            BackdropProps={{ style: { backgroundColor: "rgba(111, 126, 140, 0.2)", backdropFilter: "blur(2px)" } }}
        >
            <Box sx={{ overflow: "auto" }}>
                <List sx={{ maxWidth: drawerWidth }} component="nav" className="sidebar" aria-labelledby="main-list" dense>
                    {menuArr.map((link) => (
                        <ListItemButton component="a" to={link} key={link} selected={router.pathname === link} onClick={onClose}>
                            <ListItemText primary={link} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideDrawer;
