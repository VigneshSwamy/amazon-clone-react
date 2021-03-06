import React from 'react'
import '../css/Cart.css'
import { useStateValue } from '../context/StateProvider'
import CartProducts from './CartProducts'
import Subtotal from './Subtotal'

function Cart() {
    const [{ cart }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                {
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
                        alt=""
                        className="checkout__ad"
                    />
                }

                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Cart is Empty</h2>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Cart</h2>

                            {/* List all the checkout products */}
                            {cart.map(item => (
                                <CartProducts
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />

                            ))}
                        </div>
                    )}
            </div>

            {cart.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Cart
