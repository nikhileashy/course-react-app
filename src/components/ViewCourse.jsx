import axios from "axios";
import React, { useEffect } from "react";
import NavBar from "./NavBar";

const ViewCourses = () => {
  const [courses, setCourses] = React.useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://host-demo-app.onrender.com/api/courses",
        );
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container" style={{ padding: 10, margin: "50px auto" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>All Registered Courses</h2>
        </div>
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Course Name</th>
                <th scope="col">Trainer</th>
                <th scope="col">Duration</th>
                <th scope="col">Fee (₹)</th>
                <th scope="col">Mode</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <th scope="row">{course.id}</th>
                  <td className="fw-bold text-primary">{course.course_name}</td>
                  <td>{course.trainer}</td>
                  <td>
                    <span className="badge bg-secondary">
                      {course.duration}
                    </span>
                  </td>
                  <td>{Number(course.fee).toLocaleString()}</td>
                  <td>
                    <span
                      className={`badge ${
                        course.mode === "Online"
                          ? "bg-success"
                          : course.mode === "Offline"
                            ? "bg-warning text-dark"
                            : "bg-info text-dark"
                      }`}
                    >
                      {course.mode}
                    </span>
                  </td>
                  <td className="text-muted" style={{ fontSize: "0.85rem" }}>
                    {new Date(course.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewCourses;
