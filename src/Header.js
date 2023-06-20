import React from "react";
import "./App.scss"

function Header({ cartItems }) {
    const itemCount = cartItems?.length ?? 0;
    return (
        <header>
            <div className="header">Movie App
                <div className="user-image">
                    <i class="fa fa-cart-arrow-down" aria-hidden="true">
                        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
                    </i>
                </div>
            </div>

        </header>
    );
}


export default Header;

