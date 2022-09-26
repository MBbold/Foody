import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Fade,
  Link,
  Popper,
} from "@mui/material";
import { Stack } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { UseUserDataContext } from "../contexts/UserDataContext";
import { UseIsSignInContext } from "../contexts/IsSignInContext";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { userData } = UseUserDataContext();
  const { isSignIn, setIsSignIn } = UseIsSignInContext();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "spring-popper" : undefined;

  return (
    <Box>
      <Stack direction="row" spacing={3} justifyContent="space-between">
        <Box flex={2} p={2}>
          {" "}
          Захиалга
          {/* <TextField
            id="date"
            label="date"
            type="date"
            defaultValue="2017-05-24"
            // InputLabelProps={{
            //   shrink: true,
            // }}
          /> */}
        </Box>
        <Box flex={4} p={2} sx={{ display: { xs: "none", sm: "block" } }}></Box>
        <Box
          flex={2}
          p={2}
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Badge>
            <SearchIcon />
          </Badge>
          <Badge>
            <NotificationsActiveIcon />
          </Badge>
          <Divider orientation="vertical" />
          {isSignIn ? (
            <>
              <Typography>{userData}</Typography>
              <Box>
                <Avatar
                  aria-describedby={id}
                  onClick={handleClick}
                  sx={{ width: "30px", height: "30px" }}
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
                {/* <button aria-describedby={id} type="button" onClick={handleClick}>
                  Toggle Popper
                </button> */}
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps}>
                      <Button
                        variant="contained"
                        onClick={() => {setIsSignIn(false); navigate('/')}}
                      >
                        Гарах
                      </Button>
                    </Fade>
                  )}
                </Popper>
              </Box>
            </>
          ) : (
            <Link
              onClick={() => navigate("/")}
              color="black"
              underline="none"
              sx={{ cursor: "pointer" }}
            >
              Нэвтрэх
            </Link>
          )}
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};
