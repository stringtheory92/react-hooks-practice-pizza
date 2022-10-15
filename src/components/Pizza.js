import React from "react";

function Pizza({ pizza, onEditPizza }) {
  const { topping, size, vegetarian, id } = pizza;

  const handleEditClick = (pizza) => {
    onEditPizza(pizza);
  };

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleEditClick(pizza)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
