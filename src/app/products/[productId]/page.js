export default async function ProductDetail({ params }) {
  const { productId } = await params; // Await the params object
  console.log(productId); // Now you should get the actual productId
  
  return <div>Product ID page: {productId}</div>;
}
