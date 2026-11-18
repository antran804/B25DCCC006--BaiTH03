import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Không tìm thấy trang yêu cầu.</p>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
};

export default NotFoundPage;