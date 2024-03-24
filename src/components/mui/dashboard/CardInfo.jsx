import { Card, Grid } from "@mui/material";
import React from "react";

export const CardInfo = () => {
  const cardStyle = {
    width: "100%",
    maxWidth: "300px",
    height: "100px",
    borderRadius: "10px",
    borderShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    backgroundColor: "blue",
  };

  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ width: "100%", height: "100px", alignItems: "center" }}
    >
      {/* //firstCard */}
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{...cardStyle,backgroundColor:"blueviolet"}}></Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{...cardStyle,backgroundColor:"pink"}}></Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{...cardStyle,backgroundColor:"yellow"}}></Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{...cardStyle,backgroundColor:"white"}}></Card>
      </Grid>
      
    </Grid>
  );
};
