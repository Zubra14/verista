import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    // Example API call to the backend
    axios.post("http://localhost:5001/api/auth/login", {
      email: "admin@example.com",
      password: "securepassword",
    })
    .then(response => {
      console.log("API Response:", response.data);
    })
    .catch(error => {
      console.error("API Error:", error);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to Verista</h1>
    </div>
  );
}

export default App;