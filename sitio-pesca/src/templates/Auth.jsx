import { Grid, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const AuthTemplate = ({
  children,
  title = "",
  linkText1 = "",
  linkText2 = "",
  linkHref = "",
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Grid item sx={{}}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
        <Box>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {linkText1}
          </Typography>
          <Link to={linkHref}>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {linkText2}
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};
