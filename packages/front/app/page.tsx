"use client";

import axios from "axios";
import { AxiosInst } from "../singletons/axiosInstance";
import { useEffect, useState } from "react";

export default function Home() {
  const getAllProducts = async () => {
    //const response = await AxiosInst.getInst().get("/product");
    const response = await axios.get<Product[]>(
      "http://localhost:5000/product"
    );
    setAllProducts(response.data);
  };

  type Product = {
    name: string;
  };

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {allProducts.map((product) => (
        <div key={product.name}>{product.name}</div>
      ))}
    </div>
  );
}
