import { Button, IconButton } from "@mui/material";
import React from "react";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { LoadingButton } from "@mui/lab";
export const ButtonDemo = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="text" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "red", borderRadius: 20 }}
      >
        Error
      </Button>
      <Button
        variant="contained"
        startIcon={<FingerprintIcon />}
        endIcon={<AddTaskIcon />}
      >
        login
      </Button>
      <Button variant="contained" endIcon={<AddTaskIcon />}>
        ADD
      </Button>
      <IconButton size="small">
        <FingerprintIcon />
      </IconButton>
      <IconButton size="medium">
        <FingerprintIcon />
      </IconButton>
      <LoadingButton
        loading={true}
        loadingIndicator="Loading..."
        variant="contained"
        color="primary"
      >
        add data
      </LoadingButton>
    </div>
  );
};
