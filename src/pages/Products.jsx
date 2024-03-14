import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import Pagination from "./../components/Pagination";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const data = await res?.data.products;
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProductSearch = (e) => {
    const text = e.target.value.trim().toLowerCase();
    setFilteredProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(text) ||
          product.description.toLowerCase().includes(text) ||
          product.brand.toLowerCase().includes(text)
      )
    );
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    const filter = e.target.value;
    if (filter === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === filter)
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 return (
   <div className="container py-5 min-vh-100">
     <div className="d-flex align-items-center justify-content-between ">
       <div>
         <h1 className="mb-3">Our Latest Posts</h1>
       </div>
       <div>
         <input
           type="text"
           className="form-control w-40% mb-3"
           onChange={handleProductSearch}
           placeholder="Search"
         />
       </div>
     </div>
     <div className="row row-cols-1 row-cols-md-4 gap-5 justify-content-center">
       {currentPosts.map((product) => (
         <div key={product.id} className="col-md-3">
           <ProductCard product={product} />
         </div>
       ))}
     </div>
     <Pagination
       postsPerPage={postsPerPage}
       totalPosts={filteredProducts.length}
       paginate={paginate}
     />
   </div>
 );


};

export default Products;
