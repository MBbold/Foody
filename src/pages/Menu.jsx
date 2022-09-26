import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Button, CircularProgress, Divider, Fab, Grid, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddFoodModalComp } from "../component/AddFoodModalComp";
import { useAddFoodOpenModalContext } from "../contexts/AddFoodOpenModal";
import { foodDatas } from "../data/foodData";
import { UseFoodsDataContext } from "../contexts/FoodsDataContext";
import { getFirebaseFoods } from "../firebase/firebaseConfig";
import { useEffect } from "react";
import _ from "lodash";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  width: "100px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "30%",
    paddingLeft: "10px",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: "400",
  letterSpacing: "-0.408px",
}));

export const FoodMenu = () => {
  const { setAddFoodOpenModal } = useAddFoodOpenModalContext();
  const foodAddhandleOpen = () => {
    setAddFoodOpenModal(true);
  };
  const { foodsData, setFoodsData } = UseFoodsDataContext();

  useEffect(() => {
    const getData = async () => {
      const data = await getFirebaseFoods();
      setFoodsData([...data]);
    };
    getData();
  }, []);

  console.log("foodsData", foodsData);
  return (
    <>
      <Stack direction="row" spacing={3} justifyContent="space-between">
        <Box flex={1} p={2}>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ flex: 1, display: { xs: "none", sm: "block" } }}
          >
            Хоолны сав
          </Typography>
        </Box>
        <Box
          flex={1}
          p={2}
          gap={20}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Search
            sx={{
              backgroundColor: "white.light",
              borderRadius: "8px",
            }}
          >
            <StyledInputBase
              placeholder="Хайлт"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            onClick={foodAddhandleOpen}
            variant="contained"
            startIcon={<AddIcon sx={{ color: "addIcon.main" }} />}
          >
            Хоол нэмэх
          </Button>
        </Box>
      </Stack>
      <Divider />
      <Box sx={{ backgroundColor: "white.light", marginTop: "16px" }}>
        <Grid container spacing={2} columns={20} p={4}>
          {/* {!_.isEmpty([foodsData]) && <CircularProgress color="success"/>} */}
          {!_.isEmpty([foodsData]) ? 
          
          _.map(foodsData, (element, index) => (
            <Grid key={index} item xs={4} marginTop={10}>
              <Box
                sx={{
                  backgroundColor: "white.main",
                  borderRadius: "8px",
                  position: "relative",
                }}
                p={2}
              >
                <img
                  src={element.image}
                  alt=""
                  style={{
                    position: "absolute",
                    width: "120px",
                    top: "-70px",
                    left: "35%",
                  }}
                />
                <Box textAlign="center" sx={{ marginTop: "50px" }}>
                  <Typography>{element.name}</Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    {element.portion}
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  spacing={3}
                  justifyContent="space-between"
                  paddingTop={5}
                >
                  <Box flex={1}>{element.price}</Box>
                  <Box
                    flex={1}
                    sx={{
                      color: "addIcon.main",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Fab color="" size="small">
                      <AddIcon color="success" />
                    </Fab>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          )): <CircularProgress color="success"/>}
        </Grid>
        <AddFoodModalComp />
      </Box>
    </>
  );
};
