import { lazy, useEffect } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import { NavLink, Route, Routes } from "react-router-dom";
import Prism from "prismjs";
import { clsx } from "clsx";
import css from "./App.module.css";
import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-json";
import HomeworkProfile from "./HWF/HomeworkProfile/HomeworkProfile";

import HomeworkFriends from "./HWF/HomeworkFriends/HomeworkFriends";
import HomeworkTransaction from "./HWF/HomeworkTransaction/HomeworkTransaction";
import ThirdHomework from "./HWT/ThirdHomework/ThirdHomework";
import AppWithHTTPS from "./FourthModule/AppWithHTTPS";
// import MNOne from "../pages/MNOne";
const ScrollToTopButton = lazy(
  () => import("./ScrollToTopButton/ScrollToTopButton")
);
const HomePage = lazy(() => import("../pages/HomePage"));
const MNOne = lazy(() => import("../pages/MNOne"));
const SecondModule = lazy(() => import("../pages/SecondModule"));
const ThirdModule = lazy(() => import("../pages/ThirdModule"));
const FourthModule = lazy(() => import("../pages/FourthModule"));
const FifthModule = lazy(() => import("../pages/FifthModule"));
const FMPosts = lazy(() => import("../pages/FMPosts"));
const PostDetailsPage = lazy(() => import("../pages/PostDetailsPage"));
const PostComments = lazy(() => import("./PostComments/PostComments"));
export default function App() {
  useEffect(() => {
    Prism.highlightAll(); // пробегается по всему DOM и подсвечивает <pre><code>
  }, []);
  return (
    <div className="page">
      <header>
        <nav className={css.navigation}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/m1"
          >
            M1
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/m2"
          >
            M2
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/m3"
          >
            M3
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/m4"
          >
            M4
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/m5"
          >
            M5
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.linkActive)
            }
            to="/m5-posts"
          >
            M5 Posts
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/m1" element={<MNOne />} />
          <Route path="/m2" element={<SecondModule />} />
          <Route path="/m3" element={<ThirdModule />} />
          <Route path="/m4" element={<FourthModule />} />
          <Route path="/m5" element={<FifthModule />} />
          <Route path="/m5-posts" element={<FMPosts />} />
          <Route path="/posts/:postId" element={<PostDetailsPage />}>
            <Route path="comments" element={<PostComments />} />
          </Route>
        </Routes>
      </main>
      {/* 
      <div className="moduleBlock">
        <HomeworkProfile />
        <HomeworkFriends />
        <HomeworkTransaction />
      </div>
      <div className="moduleBlock">
      </div>
      <div className="moduleBlock">
        <ThirdModule />
        <ThirdHomework />
      </div>
      <div className="moduleBlock">
        <FourthModule />
      </div> */}
      {/* <div className="moduleBlock">
        <FifthModule />
      </div> */}

      <ScrollToTopButton />
    </div>
  );
}
