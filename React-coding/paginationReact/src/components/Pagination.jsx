import React, { useEffect } from 'react'
import { FiChevronsLeft,FiChevronsRight } from "react-icons/fi";
import { useState } from 'react';
import ProductCard from './ProductCard';

const Pagination = () => {
    const PAGE_SIZE=10;
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    useEffect(()=>{
        const fetchData=async()=>{
             try{
            setLoading(true);
           
                const data=await fetch("https://dummyjson.com/products?limit=200");
                const res=data.json();
                if(!res.ok){
                    throw new Error("Error in feching Data");

                }
                setProducts(res.products);

            }
        catch(err){
            setError(err.message);

        }finally{
           
            setLoading(false);
            
        }
    }
         fetchData();

    },[]);

    if(loading){
        return <p>Loading products...</p>
    }

    if(error){
        return <p>Error Occured: {error}</p>
    }

  return (
    <div>
        <div>
        <button><FiChevronsLeft/></button>
        {Array.from({length:20}).map((_,idx)=>(
            <button>{idx+1}</button>
        ))}
        <button><FiChevronsRight/></button>
        </div>
        <ul>
            {products.map((product,idx)=>(
                <li>
                    <ProductCard title={product.title} key={product.id} image={product.images[0]}/>
                </li>
            ))}

        </ul>

      
    </div>
  )
}

export default Pagination
