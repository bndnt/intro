import { useEffect } from "react";
import { createContext, useState } from "react";
// створюємо ліфт

export const UserContext = createContext();
// створюємо провайдер
export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setUserName("Mango");
      setIsLoading(false);
    }, 3000);
  }, []);
  const onlogOut = () => {
    setUserName(null);
  };
  return (
    <UserContext.Provider value={{ isLoading, userName, onlogOut }}>
      {children}
    </UserContext.Provider>
  );
};
