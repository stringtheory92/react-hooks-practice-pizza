import React, { useState, useEffect } from "react";

function PizzaForm({ currentPizza, onSubmitEdit }) {
  console.log("currentPizza: ", currentPizza);
  //const { topping, size, vegetarian, id } = currentPizza;

  const [formData, setFormData] = useState({
    topping: "",
    size: "Small",
    vegetarian: false,
    id: 0,
  });
  console.log("formData outside: ", formData);

  useEffect(() => {
    setFormData({ ...currentPizza });
  }, [currentPizza]);

  const handleToppingChange = (e) => {
    setFormData({ ...formData, topping: e.target.value });
  };
  //console.log(formData.topping);

  const handleSizeChange = (e) => {
    setFormData({ ...formData, size: e.target.value });
  };
  //console.log(formData.size);

  const handleVegetarianClick = (e) => {
    const isVegetarian = e.target.value === "true" ? true : false;
    setFormData({ ...formData, vegetarian: isVegetarian });
  };
  console.log("formData.vegetarian outside:", formData.vegetarian);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitEdit(e, formData);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={formData.topping}
            onChange={(e) => handleToppingChange(e)}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={formData.size}
            onChange={(e) => handleSizeChange(e)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              // value="Vegetarian"
              value={true}
              checked={formData.vegetarian === true}
              onChange={(e) => handleVegetarianClick(e)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              // value="Not Vegetarian"
              value={false}
              checked={formData.vegetarian === false}
              onChange={(e) => handleVegetarianClick(e)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
