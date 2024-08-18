import { Link, useSearchParams } from "react-router-dom";

export const Promo = () => {
  const [seachParams] = useSearchParams();
  const category = seachParams.get('category');

  return (
    <section className="promo">
      <div className="container">
        <div className="promo__container">
          <h1 className="promo__title">Попробуй новый вкус Арабики</h1>
          {category !== "coffee" ? (
            <Link className="promo__link" to="/products?category=coffee">
              Перейти к кофе
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};
