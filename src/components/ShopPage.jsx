import React, { useState } from "react";
import SortBar from "./SortBar";
import Product from "./Product";
import products from "../assets/assets"; // import dummy products

export default function ShopPage() {
  const [sortBy, setSortBy] = useState("Name");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "Name") return a.name.localeCompare(b.name);
    if (sortBy === "ID") return a.id - b.id;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-6">
      <SortBar
        totalItems={products.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        view={view}
        setView={setView}
      />

      <Product products={currentItems} view={view} />

      <div className="flex justify-center mt-5 space-x-2 bg-slate-100 px-3 py-2 rounded text-center w-full cursor-pointer">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-blue-500 text-white font-bold"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
</div>

    </div>
  );
}
