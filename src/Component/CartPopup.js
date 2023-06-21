import React from 'react';

function CartPopup({ cartItems, onCancel }) {
    return (
        <div className="cart-popup">
            <h3>Cart Items:</h3>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item.Title}</li>
                    ))}
                </ul>
            ) : (
                <p>No items in the cart.</p>
            )}
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default CartPopup;
