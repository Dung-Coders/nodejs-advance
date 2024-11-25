"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchProductAPI } from "../../api/productApi";

// import { useLocalStorage } from '@uidotdev/usehooks'
// import { handleProduct } from './Root'

// ui dc roi ne, minh nghi do 2 li do: button ban de ben ngoai form nhe, va them cai event.preventDefault vao, chac do cai nay nen thang next no k chiu push qua trang khac i

const page = () => {
  const [products, setProducts] = useState([]);
  let userSearch = useSearchParams();
  let keyword = userSearch.get("name") || "";

  useEffect(() => {
    searchProductAPI(keyword).then((result) => {
      setProducts(result);
    });
  }, [keyword]);

  // return (
  //   <>
  //       {/* {handleProduct(props)} */}

  //   </>
  // )
  return (
    <>
      <div className='grid grid-cols-4 align-center justify-around gap-[20px] mt-12 p-12'>
        {products?.map((product: any) => (
          <div key={product} className='bg-blue-200 p-5 rounded-lg w-[360px]'>
            <img src={product.color_image} alt="" className='w-[350px] h-[300px]'/>
            <p>{product.product_name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;