import React from "react";

export default function SortBar({
  totalItems,
  sortBy,
  setSortBy,
  itemsPerPage,
  setItemsPerPage,
  view,
  setView,
}) {
  return (
    <div className="flex items-center justify-between mb-6 p-4 rounded bg-gray-100">
      <span>{totalItems} Items</span>

      {/* Sort */}
      <div>
        <label className="mr-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="hover:border rounded px-2 py-1"
        >
          <option value="Name">Name</option>
          <option value="ID">ID</option>
        </select>
      </div>

      {/* Show per page */}
      <div>
        <label className="mr-2">Show</label>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="hover:border rounded px-2 py-1"
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </select>
      </div>

      {/* Grid / List toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setView("grid")}
          className={`px-3 py-1 rounded ${
            view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Grid
        </button>
        <button
          onClick={() => setView("list")}
          className={`px-3 py-1 rounded ${
            view === "list" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          List
        </button>
      </div>
    </div>
  );
}
