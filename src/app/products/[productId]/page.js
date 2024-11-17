import { notFound } from "next/navigation";

export default async function ProductDetail({ params }) {
  // Awaiting the params object
  const { productId } = await params;

  const productIdParsed = parseInt(productId);

  // Checking if the productId exceeds the limit
  if (productIdParsed > 10) {
    notFound(); // Handle 404 condition
  }

  return <div>Product ID page: {productIdParsed}</div>;
}
