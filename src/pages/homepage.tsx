import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts } from '../features/products/productsslice';
import ProductCard from '../components/productcard';
import type { RootState } from '../app/store';
import type { Product } from '../types';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: products, status } = useAppSelector((state: RootState) => state.products);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = products.filter((p: Product) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm theo tên..."
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', fontSize: '16px' }}
      />
      {status === 'loading' && <p>Đang tải sản phẩm...</p>}
      {status === 'failed' && <p>Tải dữ liệu thất bại!</p>}
      <style>
        {`
          @media (min-width: 640px) { .product-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (min-width: 1024px) { .product-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        `}
      </style>
      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }}>
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;