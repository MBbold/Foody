import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseKeyAdminPage";
import {addDoc, arrayUnion, collection, getDocs, getFirestore} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore()
const colRef = collection(db, 'Foods')

export default app
export const addFirebaseFoods = async (foodName, foodImage, foodPrice, foodDescription, foodType, recipeAddArr)=>{

    await addDoc(colRef, {
        name:foodName,
        image:foodImage,
        price:foodPrice,
        description:foodDescription,
        type:foodType,
        recipe:arrayUnion(...recipeAddArr)
        // portion:foodPortion,
        // recipe:[...foodRecipe]
        })
    }

    
export const getFirebaseFoods = async () =>{
    // const {foodsData, setFoodsData} = UseFoodsDataContext();
    const docData = await collection(db, "Foods");
    let queryData = await getDocs(docData);
    const item = [];
      if(queryData){
        queryData.docs.forEach((doc)=>{
          item.push(doc.data())
        })
        // setFoodsData(item)
      }
    return item;
    
}


export const getSignUp = (email, password) => {
    const actionCodesettings = {
        url: 'http://localhost:3000/signup',
        handleCodeInApp: true,
    }
    try {
        sendSignInLinkToEmail(auth, email, actionCodesettings);
        alert("Sign Up Successfully")
    } catch (error) {
        // console.log(error);
    }
    return createUserWithEmailAndPassword(auth, email, password)
}
export const getLogIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

