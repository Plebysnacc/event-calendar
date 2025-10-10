import React, { createContext, useContext } from "react"

type AuthContextType = {
  isAdmin: boolean,
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>,
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({children, initialValue}: {children: React.ReactNode, initialValue: boolean}) {
  const [isAdmin, setIsAdmin] = React.useState(initialValue)

  return (
    <AuthContext.Provider value={{isAdmin, setIsAdmin}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}