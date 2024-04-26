import { Link } from "react-router-dom";
import { products } from "../Components/products";
import { ProductForProps } from "../Components/ProductForProps";

export function Categories() {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Categories / Product List</h1>
      {products.map((product) => (
        <>
          <ProductForProps
            id={product.id}
            name={product.name}
            price={product.price}
            // description={product.description}
            imageUrl={product.imageUrl}
          />
          {/* <Link to={`/product/:id`}>View Product</Link> */}
          <Link to={`/product/${product.id}`}>View Details</Link>
        </>
      ))}
    </div>
  );
}
