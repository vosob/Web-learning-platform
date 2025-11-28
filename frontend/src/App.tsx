import { HomePage } from "./pages/HomePage";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router";
import { PageCourses } from "./pages/PageCourses";
import { PageArticles } from "./pages/PageArticles";
import { PageAuth } from "./pages/PageAuth";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/courses" element={<PageCourses />} />
        <Route path="/articles" element={<PageArticles />} />
        <Route path="/auth" element={<PageAuth />} />
      </Routes>
    </Layout>
  );
};
