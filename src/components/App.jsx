// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";

import AppProfile from "./AppProfile/AppProfile";
import HomeworkProfile from "./HomeworkProfile/HomeworkProfile";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
import "./App.css";
export default function App() {
  return (
    <div className="page">
      <h1>Посібник-шпора по лекціям GoIt з React </h1>
      <AppProfile />
      <HomeworkProfile />
      <ScrollToTopButton />
    </div>
  );
}
