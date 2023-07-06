import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <>
      <NavBar></NavBar>
      <UserProvider>
        <h1>main app</h1>
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
