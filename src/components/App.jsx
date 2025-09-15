// import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";

import AppProfile from "./AppProfile/AppProfile";
import HomeworkProfile from "./HWF/HomeworkProfile/HomeworkProfile";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";
import "./App.css";
import HomeworkFriends from "./HWF/HomeworkFriends/HomeworkFriends";
import HomeworkTransaction from "./HWF/HomeworkTransaction/HomeworkTransaction";
import SecondModule from "./SecondModule/SecondModule";
import ThirdModule from "./ThirdModule/ThirdModule";
export default function App() {
  return (
    <div className="page">
      <h1>Посібник-шпора по лекціям GoIt з React </h1>
      <div className="moduleBlock">
        <AppProfile />
        <HomeworkProfile />
        <HomeworkFriends />
        <HomeworkTransaction />
      </div>
      <div className="moduleBlock">
        <SecondModule />
      </div>
      <div className="moduleBlock">
        <ThirdModule />
      </div>

      <ScrollToTopButton />
    </div>
  );
}
