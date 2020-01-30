import React from "react";
import db from "../fakeDBlocation";
import CardPlace from "../components/CardPlace";

function Location() {
  return (
    <div>
      {" "}
      <h1>Quand et où nous trouver? </h1>
      <ul>
        {db.map(place => {
          return <CardPlace key={place.id} place={place} />;
        })}
      </ul>
    </div>
  );
}

export default Location;
