import { useEffect, useState } from "react";

function App() {
  const [colorFilter, setColorFilter] = useState("All");

  const cars = [
    { id: 1, brand: "Toyota", color: "Red", year: 2010 },
    { id: 2, brand: "BMW", color: "Black", year: 2020 },
    { id: 3, brand: "Honda", color: "Yellow", year: 2012 },
    { id: 4, brand: "Mersedes", color: "Green", year: 2014 },
  ];

  const filteredCars = cars.filter((car) => {
    if (colorFilter === "All") return cars;
    return car.color === colorFilter;
  });

  return (
    <div className="container">
      <div className="filter-buttons">
        <button
          onClick={() => {
            setColorFilter("All");
          }}
        >
          All cars
        </button>
        <button
          onClick={() => {
            setColorFilter("Black");
          }}
        >
          Black
        </button>
        <button
          onClick={() => {
            setColorFilter("Yellow");
          }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColorFilter("Red");
          }}
        >
          Red
        </button>
      </div>

      <ul className="cars-list">
        {filteredCars.map((car) => (
          <div className="car-item" key={car.brand}>
            <h2>{car.brand}</h2>
            <p>{car.color}</p>
            <p>{car.year}</p>
            <p></p>
          </div>
        ))}
      </ul>
      <p>Всего {cars.length} машин.</p>
    </div>
  );
}
export default App;
