// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";

import AppProfile from "./AppProfile/AppProfile";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";

export default function App() {
  return (
    <div className="page">
      <h1>Посібник-шпора по лекціям GoIt з React </h1>
      <AppProfile />
      <ScrollToTopButton />
    </div>
  );
}
