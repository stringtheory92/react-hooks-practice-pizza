import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onEditPizza }) {
  const displayedPizzas = pizzas.map((pizza) => {
    return <Pizza pizza={pizza} onEditPizza={onEditPizza} key={pizza.id} />;
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          displayedPizzas
          //render Pizza here
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
