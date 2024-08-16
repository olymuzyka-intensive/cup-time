import { useEffect } from "react";
// import { products } from "../products";
import { Product } from "./Product";
import { useProducts } from "../context/ProductContext";
import { useSearchParams } from "react-router-dom";
import { API_URL } from "../const"

export const Products = () => {
  const [seachParams] = useSearchParams()
  const { products, setCategory} = useProducts();
  const category = seachParams.get('category');

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory])

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Чай</h2>

        <ul className="products__list">
          {products.map((item) => (<Product key={item.id} data={item}/>))}
        </ul>
      </div>
    </section>
  );
};
