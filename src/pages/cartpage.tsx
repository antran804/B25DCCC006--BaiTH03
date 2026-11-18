import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { removeFromCart, updateQuantity, selectTotalPrice } from '../features/cart/cartslice';
import type { RootState } from '../app/store';
import type { CartItem } from '../types';

const CartPage: React.FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const totalPrice = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();

  if (cartItems.length === 0) return <p>Giỏ hàng trống! <Link to="/">Quay lại mua sắm</Link></p>;

  return (
    <div>
      <h2>Giỏ hàng của bạn</h2>
      {cartItems.map(({ product, quantity }: CartItem) => (
        <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
          <span style={{ width: '300px' }}>{product.title}</span>
          <span>${product.price}</span>
          <div>
            <button onClick={() => dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }))}>-</button>
            <span style={{ margin: '0 10px' }}>{quantity}</span>
            <button onClick={() => dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }))}>+</button>
          </div>
          <button onClick={() => dispatch(removeFromCart(product.id))} style={{ color: 'red' }}>Xóa</button>
        </div>
      ))}
      <h3>Tổng tiền: ${totalPrice.toFixed(2)}</h3>
      <Link to="/checkout"><button style={{ padding: '10px 20px', background: '#ffc107', border: 'none', cursor: 'pointer' }}>Tiến hành thanh toán</button></Link>
    </div>
  );
};

export default CartPage;