import { products } from "../products"
import { CartItem } from "./CartItem"

export const Cart = () => {
    return (
    <section className="cart">
        <div className="container cart__container">
            <h2 className="cart__title">Корзина (6)</h2>
            <ul className="cart__items">
                {products.map((item) => (<CartItem key={item.id} data={item}/>))}
            </ul>
        </div>
    </section>
    )
}