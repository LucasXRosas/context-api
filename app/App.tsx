import React from "react";
import ThemeContextProvider from "../contexts/ThemeContext";
import { MainContent } from "../components/MainContent";

export default function App() {
  return (
    <ThemeContextProvider>
      <MainContent />
    </ThemeContextProvider>
  );
}