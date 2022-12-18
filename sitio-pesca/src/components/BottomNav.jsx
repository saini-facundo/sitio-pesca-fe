import * as React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StarIcon from "@mui/icons-material/Star";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HomeIcon from "@mui/icons-material/Home";

export const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Rankings" icon={<StarIcon />} />
        <BottomNavigationAction label="Subir" icon={<CloudUploadIcon />} />
      </BottomNavigation>
    </Paper>
  );
};
