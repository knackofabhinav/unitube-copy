const { createContext, useContext, useState } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(AuthContext);
};
