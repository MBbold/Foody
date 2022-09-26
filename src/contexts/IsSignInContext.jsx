import { createContext, useState, useContext, useEffect } from "react";

const IsSignInContext = createContext();
export const IsSignInContextProvider = (props) => {
  const { children } = props;
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <IsSignInContext.Provider value={{ isSignIn, setIsSignIn }}>
      {children}
    </IsSignInContext.Provider>
  );
};

export const UseIsSignInContext = () => useContext(IsSignInContext);
