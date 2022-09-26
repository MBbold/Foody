import { createContext, useState, useContext } from "react";
const AddFoodOpenModalContext = createContext()
export const AddFoodOpenModalProvider = (props)=>{
    const {children} = props;
    const [addFoodOpenModal, setAddFoodOpenModal] = useState(false)

    return(
        <AddFoodOpenModalContext.Provider value={{addFoodOpenModal, setAddFoodOpenModal}}>
            {children}
        </AddFoodOpenModalContext.Provider>
    )
}
export const useAddFoodOpenModalContext =()=>useContext(AddFoodOpenModalContext)