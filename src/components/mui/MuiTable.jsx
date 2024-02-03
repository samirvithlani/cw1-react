import { Grid, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export const MuiTable = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  ];

  return (
    <Grid item  xs={12} sm={12} lg={12} xl={12}>
      <Typography variant="h4" gutterBottom>
        MuiTable
      </Typography>
      
      <DataGrid rows={rows} columns={columns}></DataGrid>
      
    </Grid>
  );
};
