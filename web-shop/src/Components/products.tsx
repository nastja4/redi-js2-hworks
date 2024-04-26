export type ProductProps = {
  id?: number;
  name?: string;
  price?: string;
  description?: string;
  imageUrl?: string;
};

// Simulating the database of products
export const products: ProductProps[] = [
  {
    id: 1,
    name: "Product #1",
    price: "10.99",
    description:
      "The Item #1 is the Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Product #2",
    price: "15.00",
    description:
      "The Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque tincidunt tincidunt.",
    imageUrl: "path/to/image1.jpg",
  },
  {
    id: 3,
    name: "Product #3",
    price: "28.30",
    description: "This Item #3 is consectetur adipiscing elit.",
    imageUrl: "path/to/image1.jpg",
  },
];
