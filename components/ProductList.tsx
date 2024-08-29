import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="my-6">
      <div className="flex justify-between items-center">
      <p className="text-heading1-bold font-serif font-thin">Products</p>
      <p className="text-grey-2 cursor-pointer hover:underline transition-all duration-500">View All</p>
      </div>
      
      <div className="flex flex-col items-start gap-10 py-8 ">
      
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No products found</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
      )}
    </div>
    </div>
    
  );
};

export default ProductList;
