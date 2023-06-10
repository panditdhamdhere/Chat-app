import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setCurrentUser(null);
    setIsLoading(false);
  };

  const authStateChanged = (user) => {
    setIsLoading(true);

    if (!user) {
      clear();
      return;
    }
    setCurrentUser(user);
    setIsLoading(false);

    // console.log(user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe()
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
