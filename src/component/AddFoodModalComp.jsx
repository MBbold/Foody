import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { InputBtn } from "./InputBtn";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useAddFoodOpenModalContext } from "../contexts/AddFoodOpenModal";
import { useState } from "react";
import { useRef } from "react";
import _ from 'lodash';
import { addFirebaseFoods } from "../firebase/firebaseConfig";

const style = {
  position: "absolute",
  top: 50,
  left: 288,
  width: 864,
  height: 1936,
  bgcolor: "background.paper",
  borderRadius: 4,
};
const timeSlots = [
  "Цагаан хоол",
  "Цавуулаггүй",
  "Хөнгөн хоол",
  "Халуун ногоотой",
  "Хүнд хоол",
];




export const AddFoodModalComp = () => {
  const { addFoodOpenModal, setAddFoodOpenModal } = useAddFoodOpenModalContext();
  const [addRecipeOpenModal, setAddRecipeOpenModal] = useState(false);
  const foodAddhandleClose = () => {
    setAddFoodOpenModal(false);
  };
  const recipeAddhandleOpen = () => {
    setAddRecipeOpenModal(true);
  };
  const recipeAddhandleClose = () => {
    setAddRecipeOpenModal(false);
  };

  const foodName = useRef();
  const foodPrice = useRef();
  const foodType = useRef();

  const foodDescription = useRef();
  const foodPortion = "Порц 1"
  const foodImage = ''
  const recipeName = useRef();
  const recipeValue = useRef();
  const [recipeAddArr, setRecipeAddArr] = useState([]);
  const foodRecipe = recipeAddArr;


  const recipeAdd = ()=>{
    setRecipeAddArr(()=>
    [...recipeAddArr, 
      {ingredient:recipeName.current.value, amount:recipeValue.current.value}])
  }
  const recipedRemove = (e) =>{
    setRecipeAddArr(_.filter(recipeAddArr, (el, index)=>index !== e))
  }
  
  return (
    <Modal
      open={addFoodOpenModal}
      onClose={foodAddhandleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <>
        <Box sx={{ ...style }}>
          <Box
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 20px",
            }}
          >
            <Button variant="" onClick={foodAddhandleClose}>
              <ClearOutlinedIcon />
            </Button>
            <Typography
              fontFamily={"Raleway"}
              sx={{ fontSize: "25px", fontWeight: "800" }}
            >
              Хоол нэмэх
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "buttonColor.main",
                color: "white.main",
                fontSize: 14,
              }}
              onClick={()=>addFirebaseFoods(foodName.current.value, foodImage, foodPrice.current.value, foodDescription.current.value, foodType.current.value, recipeAddArr)}
            >
              Хадгалах
            </Button>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              margin: "20px",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button
                variant="contained"
                component="label"
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                <input hidden accept="image/*" multiple type="file" />
                <PhotoCamera sx={{ borderRadius: "50%", height: "15px" }} />
              </Button>
            </Stack>
            <Box sx={{ width: "400px" }}>
              <Box>
                <Typography>Хоолны нэр</Typography>
                <InputBtn inputRef={foodName} />
              </Box>
              <Box marginTop={2}>
                <Typography>Дэлгэрэнгүй</Typography>
                <InputBtn 
                    inputRef={foodDescription}
                    sx={{
                    border: "1px solid #A0A2A8",
                    borderRadius: "6px",
                    padding: "2px 16px 40px 16px",
                    width: "100%",
                  }}/>
              </Box>
              <Stack
                direction="row"
                spacing={3}
                justifyContent="space-between"
                marginTop={2}
              >
                <Box flex={1}>
                  <Typography>Хоолны үнэ</Typography>
                  <InputBtn inputRef={foodPrice}/>
                </Box>
                <Box flex={1}>
                  <Typography>Төрөл</Typography>
                  {/* <Autocomplete></Autocomplete> */}
                  <Autocomplete
                    id="options-food-type"
                    size="small"
                    options={timeSlots}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField inputRef={foodType} {...params} label="Төрөлгүй" />
                    )}
                  />
                </Box>
              </Stack>
            </Box>
          </Box>
          <Divider />
          <Box
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px 30px",
            }}
          >
            <Typography sx={{fontWeight:'600'}}>Орц, найрлага</Typography>
            <Button
              onClick={recipeAddhandleOpen}
              variant="contained"
              sx={{ backgroundColor: "addFoodBtn.main", color: "dark.main", fontWeight:'600' }}
              startIcon={<AddIcon sx={{ color: "addIcon.main" }} />}
            >
              Орц нэмэх
            </Button>
          </Box>
          <Box>
            <Grid container spacing={2} columns={8} p={4}>
              {!_.isEmpty([recipeAddArr]) &&
              _.map(recipeAddArr,({ingredient, amount}, index)=>(
                <Grid item xs={4} key={index}>
                    <Typography>
                      {ingredient}
                    </Typography>
                    <Box sx={{display:'flex',  gap:3}} >
                      <TextField size="small"  id="outlined-basic" defaultValue={amount}  disabled variant="outlined" fullWidth>
                      </TextField>
                      <Button sx={{width:'50px', height:'30px', backgroundColor:'red.light', borderRadius:'10px'}} onClick={()=>recipedRemove(index)}>
                        <HorizontalRuleIcon fontSize="10px" sx={{color:'red.main'}}/>
                      </Button>
                    </Box>
                  </Grid>
              ))
              }
            </Grid>
          </Box>
          <Divider/>
          <Box >
            <Typography m={4} fontSize={22} fontWeight={600}>
              Тэжээллэг чанар
            </Typography>
            <Box component="label" textAlign='center' m={4} p={4} sx={{backgroundColor:'white.light', borderRadius:'10px', border:'1px solid ', borderStyle:'dashed', 
                  display:'flex', flexDirection:'column', gap:'20px', alignItems:'center'}}>
              <input hidden accept="image/*" multiple type="file" />
              <Typography>
                Зурагаа чирч оруулж ирж болно
              </Typography>
              
              <Box sx={{display:'flex'}}>
                {/* <Divider/>
                <Typography ml={3} mr={3}>Эсвэл</Typography>
                <Divider/> */}
                <Divider>CENTER</Divider>
              </Box>
              <Button
                variant="contained"
                component="label"
                sx={{
                  width:'200px',
                  backgroundColor: "buttonColor.main",
                  color: "white.main",
                  fontSize: 14,
                }}
              >
                Файлыг үзэх
              </Button>
            </Box>
            <Stack direction='row' gap={2} m={4}>
                <TextField label='Линк оруулж болно (Freenutrition, Fastfood...)' size="small" fullWidth></TextField>
                <Button variant="contained" size="small"
                  sx={{
                    width:'200px',
                    backgroundColor: "white.dark",
                    color: "white.main",
                    fontSize: 14,
                  }}>Оруулах</Button>
            </Stack>
          </Box>
          <Box >
            <Typography m={4} fontSize={22} fontWeight={600}>
              Тэжээллэг чанар
            </Typography>
            <Box component="label" textAlign='center' margin='auto' m={4} p={4} sx={{backgroundColor:'white.light', borderRadius:'10px', border:'1px solid ', borderStyle:'dashed', 
                  display:'flex', flexDirection:'column', gap:'20px', alignItems:'center'}}>
              <Typography>
                Зурагаа чирч оруулж ирж болно
              </Typography>
              
              <Box sx={{display:'flex'}}>
                {/* <Divider/>
                <Typography ml={3} mr={3}>Эсвэл</Typography>
                <Divider/> */}
                <Divider>CENTER</Divider>
              </Box>
              <Button
                variant="contained"
                component="label"
                sx={{
                  width:'200px',
                  backgroundColor: "buttonColor.main",
                  color: "white.main",
                  fontSize: 14,
                }}
              >
                Файлыг үзэх
              </Button>
              <input hidden accept="image/*" multiple type="file" />
            </Box>
            <Stack direction='row' gap={2} m={4}>
                <TextField label='Линк оруулж болно (Freenutrition, Fastfood...)' size="small" fullWidth></TextField>
                <Button variant="contained" size="small"
                  sx={{
                    width:'200px',
                    backgroundColor: "white.dark",
                    color: "white.main",
                    fontSize: 14,
                  }}>Оруулах</Button>
            </Stack>
          </Box>

        </Box>





        <Modal
                open={addRecipeOpenModal}
                onClose={recipeAddhandleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <>
                    <Box sx={{ 
                      display:'flex',
                      flexDirection:'column',
                      position: "absolute",
                      top: 300,
                      left: '35%',
                      width: 500,
                      bgcolor: "background.paper",
                      borderRadius: 4,
                      textAlign:'center',
                      justifyContent:'center',
                      alignItems:'center',
                      gap:3,
                      p:4
                     }}>
                        <Typography
                            fontFamily={"Raleway"}
                            sx={{ fontSize: "25px", fontWeight: "800" }}
                            >
                            Хоолны орц
                        </Typography>
                        <Box sx={{display:'flex', flexDirection:'column', gap:3}}>
                          <TextField
                              label='Нэр'
                              inputRef={recipeName}    
                          >
                          </TextField>
                          <TextField
                              label='Орц' 
                              inputRef={recipeValue}    
                          >
                          </TextField>
                          <Button
                            onClick={recipeAdd}
                            variant="contained"
                            fullWidth
                            sx={{ backgroundColor: "addFoodBtn.main", color: "dark.main", fontWeight:'600' }}
                            startIcon={<AddIcon sx={{ color: "addIcon.main" }} />}
                          >
                            Нэмэх
                          </Button>
                        </Box>
                        
                    </Box>
                </>
               
        </Modal>
      </>
    </Modal>
  );
};
