"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
    async function fetchProducts() {
        try {
            const res = await axios.get('http://localhost:8080/product');
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    fetchProducts();
  },[])

  if (error) return <p>Error: {error}</p>;

  return (
      <div className='grid grid-cols-4 align-center justify-around gap-[20px] mt-12 p-12'>
        {products?.map((product) => (
          <div key={product} className='bg-blue-200 p-5 rounded-lg w-[360px]'>
            <img src={product.color_image} alt="" className='w-[350px] h-[300px]'/>
            <p>{product.product_name}</p>
          </div>
        ))}
      </div>
  );
};

export default Products;
