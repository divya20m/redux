import { useState } from "react";
function Arrangement({ product}) {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateSubtotal = () => {
    
    return (product.price * quantity).toFixed(2); 
  };

  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
     <div>
        <img src={product.thumbnail} style={{ height: "400px", width: "300px" }} alt={product.title} />
        </div>
        <div>
          <h3>{product.title}</h3>
          </div>
          <div>
          ₹{product.price}
        
        </div>
        <div>
        ⭐{product.rating}
        <p>{product.description}</p>
        
      
        {product.category}
        </div>
        <div>
        <p>Quantity: {quantity}</p>
        <button onClick={handleIncreaseQuantity}>+</button>
        <button onClick={handleDecreaseQuantity}>-</button>
      </div>
        <div>
        <p>Subtotal: ₹{calculateSubtotal()}</p>
          <p>shipping= free</p>
        </div>
    </div>
  );
}

export default Arrangement;