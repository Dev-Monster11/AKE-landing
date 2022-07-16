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
        <Box className="fadeInUp" sx={{ m: 0, mt: { sm: 8, xs: 7 } }}>
            <Box
                component="img"
                alt="back"
                src="back.png"
                width="100vw"
                sx={{ height: { xs: "330px", sm: "100%" }, objectFit: "cover", objectPosition: "center" }}
            />
            <Box sx={{ maxWidth: "700px", py: { sm: 5, xs: 2 }, mb: { sm: 5, xs: 2 }, mx: "auto", textAlign: "center" }}>
                <Box sx={{ color: "#363636", fontWeight: "bold", typography: { sm: "h2", xs: "h5" } }} component="div">
                    ALKEBULEUM
                </Box>
                <Box sx={{ color: "#363636", fontWeight: "bold", mb: 3, typography: { sm: "h5", xs: "body" } }} component="div">
                    Decentralized platform powering the cryptocurrency Alke (AKE) and tailoring smart economy solutions for developing nations
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button sx={{ backgroundColor: "#dbb189", color: "black", fontWeight: "bold", mx: { sm: 3, xs: 1 }, px: 3 }}>Read More</Button>
                    <Button sx={{ backgroundColor: "#dbb189", color: "black", fontWeight: "bold", mx: { sm: 3, xs: 1 }, px: 3 }}>Buy Token</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
