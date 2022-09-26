import { createContext, useState, useContext } from "react";
const FoodsDataContext = createContext()
export const FoodsDataContextProvider = (props)=>{
    const {children} = props;
    const [foodsData, setFoodsData] = useState()

    return(
        <FoodsDataContext.Provider value={{foodsData, setFoodsData}}>
            {children}
        </FoodsDataContext.Provider>
    )
}
export const UseFoodsDataContext =()=>useContext(FoodsDataContext)