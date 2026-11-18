import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authcontext';
import { useTheme } from '../contexts/themmecontext';
import { useAppSelector } from '../app/hooks';
import { selectTotalQuantity } from '../features/cart/cartslice';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const totalQty = useAppSelector(selectTotalQuantity);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', borderBottom: '1px solid #ccc' }}>
      <div>
        <Link to="/" style={{ marginRight: '20px', fontWeight: 'bold', textDecoration: 'none' }}>ShopMini</Link>
        <Link to="/cart" style={{ textDecoration: 'none' }}>Giỏ hàng ({totalQty})</Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={toggleTheme}>Theme: {theme === 'light' ? '☀️ Sáng' : '🌙 Tối'}</button>
        {user ? (
          <>
            <span>Chào, {user.username}</span>
            <button onClick={logout}>Đăng xuất</button>
          </>
        ) : (
          <Link to="/login">Đăng nhập</Link>
        )}
      </div>
    </header>
  );
};

export default Header;