import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button
} from "@material-ui/core";

export const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/auth", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json());

    console.log({ response });
  };
  return (
    <div>
      <form noValidate style={{ marginTop: "5rem" }}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button color="primary" onClick={e => handleSignUp(e)}>
          Sign up
        </Button>
      </form>
    </div>
  );
};
