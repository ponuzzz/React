import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slice/productSlice";
import { addToCart } from "../slice/cartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {items.map((product) => (
        <div key={product.id} className="card mb-3">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5>{product.title}</h5>
            <p>${product.price}</p>

            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
