import React from "react";
import db from "../fakeDB";
import CardPizza from "../components/CardPizza";

function Menu() {
  return (
    <div>
      <h1>Quoi manger</h1>
      <ul>
        {db.map(pizza => {
          return <CardPizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
}

export default Menu;
