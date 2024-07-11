import { Typography } from "@mui/material";
import Box from "./Card";

function Menu() {
  return (
    <div id="menu">
      <Box sx={{ ".css-1oqqzyl-MuiContainer-root": { p: "100px" } }}>
        <h1>ahmed</h1>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "33px",
            fontWeight: "bold",
            color: "#fff",
            my: 2,
          }}
        >
          MENU
        </Typography>
      </Box>
    </div>
  );
}

export default Menu;
