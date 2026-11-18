import React, { useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { clearCart } from '../features/cart/cartslice';

const CheckoutPage: React.FC = () => {
  const [successMsg, setSuccessMsg] = useState(false);
  const dispatch = useAppDispatch();

  const handleCheckout = () => {
    dispatch(clearCart());
    setSuccessMsg(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Thanh toán đơn hàng</h2>
      {successMsg ? (
        <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>🎉 Đặt hàng thành công! Giỏ hàng đã được làm trống.</p>
      ) : (
        <>
          <p>Nhấn vào nút bên dưới để xác nhận đặt hàng ShopMini.</p>
          <button onClick={handleCheckout} style={{ padding: '12px 25px', background: '#28a745', color: '#fff', border: 'none', fontSize: '16px', cursor: 'pointer' }}>
            ĐẶT HÀNG
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;