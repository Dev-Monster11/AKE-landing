import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const HeroSection = () => {
    return (
        <Box className="fadeInUp" sx={{ m: 0, mt: { sm: 8, xs: 6 } }}>
            <Box component="img" alt="back" src="back.jpg" width="100%" />
            <Box sx={{ maxWidth: "700px", py: 5, mb: 5, mx: "auto", textAlign: "center" }}>
                <Box sx={{ color: "#363636", fontWeight: "bold", mb: 3, typography: { sm: "h2", xs: "h5" } }} component="div">
                    AKE ICO Platform
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button sx={{ backgroundColor: "#dbb189", color: "black", fontWeight: "bold", mx: { sm: 3, xs: 1 } }}>Read More</Button>
                    <Button sx={{ backgroundColor: "#dbb189", color: "black", fontWeight: "bold", mx: { sm: 3, xs: 1 } }}>Buy Token</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
