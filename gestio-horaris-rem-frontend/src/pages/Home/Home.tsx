import { Button } from "@mui/material";
import React from "react";

export const Home: React.FC = () => {
  return (
    <>
      <div
        style={{ textAlign: "right", marginTop: "50px", marginRight: "50px" }}
      >
        <Button variant="contained" color="primary">
          Iniciar Sessió
        </Button>
      </div>
    </>
  );
};
