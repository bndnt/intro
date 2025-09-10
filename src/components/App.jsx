// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";

import AppProfile from "./AppProfile/AppProfile";
import HomeworkProfile from "./HomeworkProfile/HomeworkProfile";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
import "./App.css";
import HomeworkFriends from "./HomeworkFriends/HomeworkFriends";
import HomeworkTransaction from "./HomeworkTransaction/HomeworkTransaction";
import SecondModule from "./SecondModule/SecondModule";
export default function App() {
  return (
    <div className="page">
      <h1>Посібник-шпора по лекціям GoIt з React </h1>
      <AppProfile />
      <HomeworkProfile />
      <HomeworkFriends />
      <HomeworkTransaction />
      <ScrollToTopButton />
      <SecondModule />
    </div>
  );
}
