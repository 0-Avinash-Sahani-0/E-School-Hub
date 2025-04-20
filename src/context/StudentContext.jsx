import React, { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({
    name: "Aman Gupta",
    standard: "5th Standard",
    roll: "RG2025-001",
    email: "amangupta@example.com",
    phone: "+91 9876543210",
    address: "123 Street, City, India",
    photo: null,
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
