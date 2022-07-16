import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Card, CardContent, Button } from "@mui/material";
import Countdown from "react-countdown";
import { bgcolor } from "@mui/system";
import { styled } from "@mui/material/styles";

const FooterSection = () => {
    return (
        <Box sx={{ py: 7, border: "none", bgcolor: "#e6be9a" }}>
            <Grid container spacing={4} sx={{ width: "100%", mx: 0 }}>
                <Grid item xs={12}>
                    Footer Section
                </Grid>
            </Grid>
        </Box>
    );
};

export default FooterSection;
