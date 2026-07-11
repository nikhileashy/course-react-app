import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCourse from "./components/AddCourse";
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<AddEmployee />} /> */}
          <Route path="add" element={<AddCourse />} />
          {/* <Route path="search" element={<SearchEmployee />} />
          <Route path="delete" element={<DeleteEmployee />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
