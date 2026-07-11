import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import ViewCourses from "./components/ViewCourse";
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ViewCourses />} />
          <Route path="add" element={<AddCourse />} />
          <Route path="view" element={<ViewCourses />} />
          {/* <Route path="delete" element={<DeleteEmployee />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
