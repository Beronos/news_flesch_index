import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  return (
    <UserContext.Provider value={{ selectedTopics, setSelectedTopics }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
