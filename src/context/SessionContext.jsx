import React, { createContext, useMemo, useState } from "react";

export const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);

  const addSession = (session) => {
    setSessions((prev) => [{ ...session, id: Date.now() }, ...prev]);
  };

  const deleteSession = (id) => {
    setSessions((prev) => prev.filter((item) => item.id !== id));
  };

  const value = useMemo(
    () => ({ sessions, addSession, deleteSession }),
    [sessions]
  );

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};
