import React from "react";

export default function Product({ products, view }) {
  return (
    <div>
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg shadow-sm bg-white relative"
            >
              {product.hot && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  HOT
                </span>
              )}
              {product.rating && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                  <i class="fa-solid fa-star"></i>{product.rating}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-800">{product.name}</h3>
                <div className="mt-2">
                  <span className="text-blue-500 font-bold text-lg">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-400 ml-2">
                    ${product.oldPrice}
                  </span>
                  <span className="text-red-500 ml-2 text-sm">
                    {product.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center rounded-lg shadow-sm bg-white p-4 relative"
            >
              {product.hot && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  HOT
                </span>
              )}
              {product.rating && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <i class="fa-solid fa-star"></i> {product.rating}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">{product.name}</h3>
                <div className="mt-1">
                  <span className="text-blue-500 font-bold text-lg">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-400 ml-2">
                    ${product.oldPrice}
                  </span>
                  <span className="text-red-500 ml-2 text-sm">
                    {product.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
