export default function ProductDetail({ params }) {
  // Access the productId from the params object
  const { productId } = params;
  console.log(productId);

  return <div>Product ID page: {productId}</div>;
}
