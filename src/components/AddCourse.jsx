import React from "react";
import NavBar from './NavBar'

const AddCourse = () => {
  return (
    <div>
      <NavBar/>
      <div classNameName="container" style={{ padding: 10, margin: 50 }}>
        <h1 style={{ marginBottom: 50 }}>Add Couse</h1>
        <div className="row g-3 ">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">
              Course Name
            </label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">
              Duration
            </label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">
              Fee
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">
              Trainer
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">
              Mode
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">Online</option>
              <option value="2">Offline</option>
              <option value="3">Hybrid</option>
            </select>
          </div>
          <div className="col col-12 col-sm-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
