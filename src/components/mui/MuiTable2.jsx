import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const MuiTable2 = () => {
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "age", headerName: "Age", type: "number", width: 90 },
    { field: "isActive", headerName: "Status", width: 130 },
    {field:"action",headerName:"ACtion",width:130}
  ];

  const [users, setusers] = useState([]);
  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Grid item xs={12} sm={12} lg={12} xl={12}>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row._id}
        ></DataGrid>
      </Box>
    </Grid>
  );
};
