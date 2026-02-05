import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, Course, 
  CourseDetail, CourseLesson, Blog, BlogDetail, 
  Checkout, Search, LiteratureCourse, 
  Membership, Meeting 
} from "../components/pages";
import RouteGuard from "../contexts/protectedRoutes";

const AppRoutes: React.FC = () => {
  return (
    <main style={{ minHeight: "calc(100vh - 83px)", background: "#F7FAFC" }}>
      <RouteGuard>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/details" element={<BlogDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/details" element={<CourseDetail />} />
        <Route path="/course/lesson" element={<CourseLesson />} />
        <Route path="/course/literature" element={<LiteratureCourse />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/meeting" element={<Meeting />} />
      </Routes>
    </RouteGuard>
    </main>
  );
};

export default AppRoutes;
