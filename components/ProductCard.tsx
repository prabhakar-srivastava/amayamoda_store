"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  console.log(product,"procu");
  
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[250px] hover:shadow-lg  hover:scale-105 transition-all duration-500 rounded-sm cursor-pointer flex flex-col "
    >
      <div className="relative">
        <div className="rounded-sm">
          <Image
            src={product.media[0]}
            alt="product"
            width={250}
            height={300}
            className="h-[350px] rounded-t-md  object-cover"
          />
        </div>
        <div className=" absolute z-10 top-1.5 right-1.5">
          <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />

        </div>
      </div>

      <div className="py-1">
        <div>
          <p className="text-base-bold">{product.title}</p>
          <p className="text-small-medium text-grey-2">{product.description.substring(0,20)}</p>
          {/* <p className="text-small-medium text-grey-2">{product.category}</p> */}
        </div>
        <div className="flex gap-3 items-baseline mt-2">
          <p className="text-heading2-bold"> &#8377;{product.price}</p>
          <p className="text-small-bold line-through "> &#8377;{product.expense as any}</p>
        </div>
      </div>

    </Link>
  );
};

export default ProductCard;
