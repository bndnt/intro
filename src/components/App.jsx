import { useEffect } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "/vite.svg";
import Prism from "prismjs";
import { clsx } from "clsx";
import css from "./App.module.css";
import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-json";
import HomeworkProfile from "./HWF/HomeworkProfile/HomeworkProfile";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";

import HomeworkFriends from "./HWF/HomeworkFriends/HomeworkFriends";
import HomeworkTransaction from "./HWF/HomeworkTransaction/HomeworkTransaction";
import ThirdHomework from "./HWT/ThirdHomework/ThirdHomework";
import AppWithHTTPS from "./FourthModule/AppWithHTTPS";
import FifthModule from "../pages/FifthModule";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MNOne from "../pages/MNOne";
import SecondModule from "../pages/SecondModule";

import ThirdModule from "../pages/ThirdModule";
import FourthModule from "../pages/FourthModule";
import FMPosts from "../pages/FMPosts";
import PostDetailsPage from "../pages/PostDetailsPage";

import "./App.css";
import PostComments from "./PostComments/PostComments";
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
