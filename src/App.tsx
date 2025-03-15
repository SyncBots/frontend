import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Button } from "@mui/material";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    // Call a get request using axios
    // Then set the message state to the response data
    axios.get("/api/")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error fetching data", error))
      .finally(() => console.log("Data fetched"))
  }, [])

  return (
      <Container>
          <Typography
            variant="h3"
            gutterBottom>
              FastAPI + React + Vite + MUI (TypeScript)
          </Typography>
          <Typography
            variant="body1">
              {message || "Loading..."}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}>
              Material UI Button
          </Button>
      </Container>
  );
}

export default App
