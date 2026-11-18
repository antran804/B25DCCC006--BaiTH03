import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;