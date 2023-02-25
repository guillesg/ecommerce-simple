import React from "react";
import Background from "../assets/bg.jpg"

function Home() {
  return (
    <div className="hero">
      <div className="card bg-card text-white border-0">
        <img src={Background} className="card-img" alt="..." height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                <p className="card-text lead fs-2">
                    CHECK OUT ALL THE TRENDS
                </p>
                <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
