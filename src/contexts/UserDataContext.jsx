import { createContext, useState, useContext } from "react";

const UserDataContext = createContext();
export const UserDataProvider = (props) => {
  const { children } = props;
  const [userData, setUserData] = useState();

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const UseUserDataContext = () => useContext(UserDataContext);
