import Modal from "react-modal";
import { API_URL } from "../const"
import { useState } from "react";
import { useCart } from "../context/CartContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: '0'
  },
};

Modal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useCart()
  
  if (!data) {
    return null;
  }

    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    }
      const handleIncrease = () => {
        setQuantity(quantity + 1)
      }

      const handleAddToCart = () => {
        addToCart(data, quantity)
        onRequestClose()
      }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Product Modal"
    >
    <div className="modal">
        <img className="modal__img" src={`${API_URL}${data.img}`} alt={data.title} />
        <div className="modal__info">
            <div className="modal__info-top">
                <h3 className="modal__title">{data.title}</h3>
                <p className="modal__price">{data.price}&nbsp;₽</p>
            </div>
            <ul className="modal__items">
                {Object.entries(data.additional).map(([key, value]) => (
                    <li key={key} className="modal-item">
                        {/* <strong>{key}</strong> {value} */}
                        <div className="modal-item__key">{key}</div> 
                        <div className="modal-item__value">{value}</div>
                    </li>
                ))}
            </ul>
            <div className="modal-item__quantity">
                <button className='modal-item__quantity-button cart-item__quantity-button_minus'  
                onClick={handleDecrease}></button>
                <input type="number" className="modal-item__quantity-input" value={quantity} readOnly />
                <button className="modal-item__quantity-button cart-item__quantity-button_plus"  
                onClick={handleIncrease}></button>
                <button className="modal__order-button"  onClick={handleAddToCart}>Добавить</button>
            </div>

            <button className="modal__close" onClick={onRequestClose}>+</button>
        </div>
    </div>
    

    </Modal>
  );
};
