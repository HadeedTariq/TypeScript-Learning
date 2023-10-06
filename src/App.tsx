import React from "react";
import { UseQueryResult, useQuery } from "react-query";
import axios from "axios";
import { Product } from "./products";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { addToCart, totalProducts } from "./redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading }: UseQueryResult<Product[], Error> = useQuery(
    {
      queryKey: ["products"],
      queryFn: async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        dispatch(totalProducts(data));
        return data;
      },
    }
  );
  if (isLoading) {
    return <h3>Loading🚀🚀🚀🚀</h3>;
  }
  if (error) {
    return <h4>OOps Something went wrong😱😱😱</h4>;
  }
  const add = (prod: Product) => {
    dispatch(addToCart(prod));
  };
  return (
    <>
      <NavBar />
      <div className="products">
        {data?.slice(0, 8).map((prod) => (
          <div key={prod.id} className="product">
            <img src={prod.image} alt="" />
            <h2>{prod.title.slice(0, 20)}</h2>
            <button onClick={() => add(prod)}>Add</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
