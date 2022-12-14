import * as React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StarIcon from "@mui/icons-material/Star";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export const BottomNav = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation style={{ justifyContent: "space-around" }}>
        <Link to={"/home"}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to={"/rankings"}>
          <BottomNavigationAction label="Rankings" icon={<StarIcon />} />
        </Link>
        <Link to={"/upload"}>
          <BottomNavigationAction label="Subir" icon={<CloudUploadIcon />} />
        </Link>
      </BottomNavigation>
    </Paper>
  );
};
