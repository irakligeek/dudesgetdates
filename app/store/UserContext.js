'use client';
import { createContext, useState } from "react";

// Create the User Context
export const UserContext = createContext();

// Create a User Provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState("This is test user 44");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}