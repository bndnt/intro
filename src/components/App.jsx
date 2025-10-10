import { lazy, Suspense, useEffect } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Prism from "prismjs";
import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-json";
import HomeworkProfile from "./HWF/HomeworkProfile/HomeworkProfile";

import HomeworkFriends from "./HWF/HomeworkFriends/HomeworkFriends";
import HomeworkTransaction from "./HWF/HomeworkTransaction/HomeworkTransaction";
import ThirdHomework from "./HWT/ThirdHomework/ThirdHomework";
import AppWithHTTPS from "./FourthModule/AppWithHTTPS";
const Loader = lazy(() => import("./Loader/Loader"));
const Navigation = lazy(() => import("./Navigation/Navigation"));
const HomePage = lazy(() => import("../pages/HomePage"));
const TypeScript = lazy(() => import("../pages/TypeScript"));
const MNOne = lazy(() => import("../pages/MNOne"));
const SecondModule = lazy(() => import("../pages/SecondModule"));
const ThirdModule = lazy(() => import("../pages/ThirdModule"));
const FourthModule = lazy(() => import("../pages/FourthModule"));
const FifthModule = lazy(() => import("../pages/FifthModule"));
const FMPosts = lazy(() => import("../pages/FMPosts"));
const PostDetailsPage = lazy(() => import("../pages/PostDetailsPage"));
const PostComments = lazy(() => import("./PostComments/PostComments"));
const SixthModule = lazy(() => import("../pages/SixthModule"));
const ScrollToTopButton = lazy(
  () => import("./ScrollToTopButton/ScrollToTopButton")
);
export default function App() {
  useEffect(() => {
    Prism.highlightAll(); // пробегается по всему DOM и подсвечивает <pre><code>
  }, []);
  return (
    <div className="page">
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ts" element={<TypeScript />} />
            <Route path="/m1" element={<MNOne />} />
            <Route path="/m2" element={<SecondModule />} />
            <Route path="/m3" element={<ThirdModule />} />
            <Route path="/m4" element={<FourthModule />} />
            <Route path="/m5" element={<FifthModule />} />
            <Route path="/m5-posts" element={<FMPosts />} />
            <Route path="/posts/:postId" element={<PostDetailsPage />}>
              <Route path="comments" element={<PostComments />} />
            </Route>
            <Route path="/m6" element={<SixthModule />} />
          </Routes>
        </Suspense>
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
