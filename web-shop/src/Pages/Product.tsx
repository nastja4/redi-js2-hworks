import { useParams } from "react-router-dom";
import { products } from "../Components/products";

export function Product() {
  const { id } = useParams<{ id: string | undefined }>();
  const product = id ? products.find((p) => p.id === parseInt(id)) : undefined; // get the product id from URL

  return (
    <div>
      {product ? (
        <div style={{ marginTop: "40px" }}>
          <h2>{product.name}</h2>
          <br />
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "200px", background: "lightgreen" }}
          />
          <br />
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
