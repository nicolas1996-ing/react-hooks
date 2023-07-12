import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { UserProviderRepaso } from "./hooks/UserProviderRepaso";
import { NavBar } from "./NavBar";
import { routes } from "./shared/routes";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";

export const MainApp = () => {
  return (
    <UserProviderRepaso>
      <h1>MainApp</h1>
      <NavBar />
      <hr />

      {/* routes */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </UserProviderRepaso>
  );
};
