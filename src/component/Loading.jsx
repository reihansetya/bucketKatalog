import React from "react";

export const Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {[1, 2, 3, 4].map((key) => (
            <a
              key={key}
              href="#"
              tabIndex="-1"
              className="btn btn-primary placeholder col-md-1 col-2 me-3"
            ></a>
          ))}
        </div>
      </div>

      <div className="row pt-3">
        {[1, 2, 3].map((key) => (
          <div key={key} className="col-md">
            <div className="card w-75 mt-3 mx-auto" aria-hidden="true">
              <div
                style={{ height: "200px", opacity: "0.5" }}
                className="card-header bg-black"
              ></div>
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  tabIndex="-1"
                  className="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
