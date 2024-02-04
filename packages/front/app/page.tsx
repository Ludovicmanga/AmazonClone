"use client";

import axios from "axios";
import { AxiosInst } from "../singletons/axiosInstance";
import { useEffect, useState } from "react";
import { getAllMainCategories } from "./helpers/mainCategories.helper";
import { useAppDispatch } from "../redux/hooks";
import { setMainCategories } from "../redux/mainCategories.slice";
import { Product } from "../types/types";

export default function Home() {
  const dispatch = useAppDispatch();
  const handleGetAllProducts = async () => {
    const response = await axios.get<Product[]>(
      "http://localhost:5000/product"
    );
    setAllProducts(response.data);
  };

  const handleGetAllMainCategories = async () => {
    const response = await getAllMainCategories();
    dispatch(setMainCategories(response as string[]));
  };

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    handleGetAllMainCategories();
    handleGetAllProducts();
  }, []);

  return (
    <div>
      {allProducts.map((product) => (
        <div key={product.name}>{product.name}</div>
      ))}
    </div>
  );
}
