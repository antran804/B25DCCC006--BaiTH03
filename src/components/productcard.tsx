import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useAppDispatch } from '../app/hooks';
import { addToCart } from '../features/cart/cartslice';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
        <h4 style={{ fontSize: '14px', margin: '10px 0', height: '40px', overflow: 'hidden' }}>{product.title}</h4>
        <p style={{ color: 'red', fontWeight: 'bold' }}>${product.price}</p>
      </Link>
      <button onClick={() => dispatch(addToCart(product))} style={{ padding: '8px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ProductCard;