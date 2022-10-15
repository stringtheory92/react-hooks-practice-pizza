import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [currentPizza, setCurrentPizza] = useState({});

  const dbUrl = "http://localhost:3001/pizzas";

  useEffect(() => {
    fetch(dbUrl)
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  function onEditPizza(pizza) {
    setCurrentPizza(pizza);
  }

  function onSubmitEdit(e, newPizza) {
    const configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(newPizza),
    };
    fetch(`${dbUrl}/${newPizza.id}`, configObj)
      .then((res) => res.json())
      .then((data) => {
        const updatedData = pizzas.map((pizza) => {
          if (pizza.id === data.id) return data;
          return pizza;
        });
        setPizzas(updatedData);
      });
  }

  console.log("pizzas: ", pizzas);
  //console.log("currentPizza: ", currentPizza);
  return (
    <>
      <Header />
      <PizzaForm currentPizza={currentPizza} onSubmitEdit={onSubmitEdit} />
      <PizzaList pizzas={pizzas} onEditPizza={onEditPizza} />
    </>
  );
}

export default App;
