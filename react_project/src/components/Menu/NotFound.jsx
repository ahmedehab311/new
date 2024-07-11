import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <Typography variant="h2" sx={{ textAlign: "center", mt: 4 }}>
        404 - Page Not Found
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Typography
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer", color: "#00f", textDecoration: "underline" }}
        >
          Go Back to Home
        </Typography>
      </Box>
    </Container>
  );
}

export default NotFound;
