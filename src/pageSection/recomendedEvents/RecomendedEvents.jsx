import React from "react";

import RecomemndedCard from "../../UI/RecomemndedCard";

function RecomendedEvents() {
  return (
    <div className="mt-4 px-5" style={{ backgroundColor: "" }}>
      <h3>Recommended events for you</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur a nulla eaque atque, placeat quas
        qui nemo architecto.
      </p>
      <div className="row">
        <div className="col-12 col-md-6">
          <RecomemndedCard />
        </div>
        <div className="col-12 col-md-6">
          <RecomemndedCard />
        </div>
        <div className="col-12 col-md-6">
          <RecomemndedCard />
        </div>
        <div className="col-12 col-md-6">
          <RecomemndedCard />
        </div>
      </div>
    </div>
  );
}

export default RecomendedEvents;
