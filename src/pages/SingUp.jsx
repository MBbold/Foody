import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getSignUp } from "../firebase/firebaseConfig";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const margintop = {
  marginTop: "10px",
};

export const SingUp = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    setError("");
    getSignUp(emailRef.current.value, passwordRef.current.value);
  };
  const currentURL = window.location.href;
  console.log(currentURL);
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "adminColor.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">Sign In</Typography>
      <Box sx={{ width: "30%" }}>
        <Typography sx={margintop}>Email</Typography>
        <TextField
          fullWidth
          required
          margin="normal"
          id="outlined-basic"
          label="Email"
          variant="filled"
          inputRef={emailRef}
        />
        <Typography sx={margintop}>Password</Typography>
        <TextField
          fullWidth
          required
          margin="normal"
          type="password"
          id="outlined-basic"
          label="Password"
          variant="filled"
          inputRef={passwordRef}
        />
        <Typography sx={margintop}>Password Confirmation</Typography>
        <TextField
          fullWidth
          required
          margin="normal"
          type="password"
          id="outlined-basic"
          label="Password Confirmation"
          variant="filled"
          inputRef={passwordConfirmRef}
        />
        <Button
          sx={{ ...margintop, backgroundColor: "buttonColor.main" }}
          fullWidth
          color="secondary"
          variant="contained"
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography sx={{ textAlign: "center", marginTop: 2 }}>
          Already have an account? <Link to="/">Sign In</Link>
        </Typography>
      </Box>
    </Box>
  );
};
