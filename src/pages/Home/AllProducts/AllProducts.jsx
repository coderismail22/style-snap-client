import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { ProductCard } from "../../../compoChunks/ProductCard/ProductCard";

export const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/allProducts");
        const data = await res.json();
        console.log("all products", data);
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Calculate index of the first and last items of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {loading ? (
        //   <HomeSkeleton></HomeSkeleton>
        <div className="flex justify-center items-center h-screen">
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <>
          <div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
              {currentItems.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
            <div className="flex justify-center items-center mt-4">
              {Array.from(
                { length: Math.ceil(products.length / itemsPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`px-4 py-2 mx-2 rounded ${
                      currentPage === i + 1
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
