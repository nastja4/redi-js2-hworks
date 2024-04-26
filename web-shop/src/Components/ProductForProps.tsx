import { ProductProps } from "../Components/products";

export function ProductForProps({
  id,
  name,
  price,
  description,
  imageUrl,
}: ProductProps) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>{name}</h2>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: "200px", background: "lightgreen" }}
      />
      <br />
      {/* <p>Description: {description}</p> */}
      <p>Price: €{price}</p>
    </div>
  );
}
