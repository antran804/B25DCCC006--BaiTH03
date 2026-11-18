import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../types';
import { useAppDispatch } from '../app/hooks';
import { addToCart } from '../features/cart/cartslice';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Đang tải chi tiết...</p>;

  return (
    <div style={{ display: 'flex', gap: '40px' }}>
      <img src={product.image} alt={product.title} style={{ width: '300px', height: '300px', objectFit: 'contain' }} />
      <div>
        <h2>{product.title}</h2>
        <p style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>${product.price}</p>
        <p>{product.description}</p>
        <p><b>Danh mục:</b> {product.category}</p>
        <button onClick={() => dispatch(addToCart(product))} style={{ padding: '10px 20px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;