import { useState } from "react";

export default function Phones() {
  const [filters, setFilters] = useState({
    brand: "all",
    os: "all",
    minPrice: 0,
    maxPrice: 1000,
    minRAM: 0,
    search: "",
  });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const phones = [
    {
      id: 1,
      name: "iPhone 13",
      brand: "Apple",
      price: 799,
      ram: 4,
      storage: 128,
      os: "iOS",
    },
    {
      id: 2,
      name: "Galaxy S21",
      brand: "Samsung",
      price: 699,
      ram: 8,
      storage: 256,
      os: "Android",
    },
    {
      id: 3,
      name: "Pixel 6",
      brand: "Google",
      price: 599,
      ram: 8,
      storage: 128,
      os: "Android",
    },
    {
      id: 4,
      name: "iPhone 12",
      brand: "Apple",
      price: 699,
      ram: 4,
      storage: 64,
      os: "iOS",
    },
    {
      id: 5,
      name: "Galaxy A52",
      brand: "Samsung",
      price: 349,
      ram: 6,
      storage: 128,
      os: "Android",
    },
    {
      id: 6,
      name: "OnePlus 9",
      brand: "OnePlus",
      price: 729,
      ram: 12,
      storage: 256,
      os: "Android",
    },
  ];

  const filteredPhones = phones.filter((phone) => {
    const brandMatch = filters.brand === "all" || phone.brand === filters.brand;
    const osMatch = filters.os === "all" || phone.os === filters.os;
    const priceMatch =
      phone.price >= filters.minPrice && phone.price <= filters.maxPrice;
    const ramMatch = phone.ram >= filters.minRAM;
    const searchMatch =
      phone.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      phone.brand.toLowerCase().includes(filters.search.toLowerCase());
    return brandMatch && osMatch && priceMatch && ramMatch && searchMatch;
  });

  const brands = [...new Set(phones.map((p) => p.brand))];
  const osTypes = [...new Set(phones.map((p) => p.os))];

  return (
    <div className="container">
      <div className="filter-buttons">
        Поиск по названию
        <input
          type="text"
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
        />
        Бренды
        <select
          value={filters.brand}
          onChange={(e) => updateFilter("brand", e.target.value)}
        >
          <option value="all">Все</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        ОС
        <select
          value={filters.os}
          onChange={(e) => updateFilter("os", e.target.value)}
        >
          <option value="all">Все</option>
          {osTypes.map((os) => (
            <option key={os} value={os}>
              {os}
            </option>
          ))}
        </select>
        Цена диапазон от
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={(e) => updateFilter("minPrice", Number(e.target.value))}
        />
        <span>{filters.minPrice}</span>
        Цена диапазон до
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.maxPrice}
          onChange={(e) => updateFilter("maxPrice", Number(e.target.value))}
        />
        <span>{filters.maxPrice}</span>
        Оперативка (от)
        <input
          type="range"
          min="0"
          max="12"
          step="2"
          value={filters.minRAM}
          onChange={(e) => updateFilter("minRAM", Number(e.target.value))}
        />
        <span>{filters.minRAM} GB</span>
        <button
          onClick={() =>
            setFilters({
              brand: "all",
              os: "all",
              minPrice: 0,
              maxPrice: 1000,
              minRAM: 0,
              search: "",
            })
          }
        >
          Сбросить фильтры
        </button>
      </div>

      <ul className="cars-list">
        {filteredPhones.map((phone) => (
          <div className="car-item" key={phone.id}>
            <h2>{phone.name}</h2>
            <p>{phone.brand}</p>
            <p>${phone.price}</p>
            <p>{phone.ram} GB RAM</p>
            <p>{phone.storage} GB Storage</p>
          </div>
        ))}
      </ul>
      <p>Найдено {filteredPhones.length} телефонов.</p>
    </div>
  );
}
