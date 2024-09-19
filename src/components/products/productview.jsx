import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, type: 'lamps', name: 'Desk Lamp' },
  { id: 2, type: 'lamps', name: 'Floor Lamp' },
  { id: 3, type: 'candles', name: 'Scented Candle' },
  { id: 4, type: 'decorative', name: 'Wall Art' },
  { id: 5, type: 'floor', name: 'Rug' },

];

export default function ProductView({ type }) {
  const filteredProducts = products.filter(product => product.type === type);

  return (
    <section>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Products</h2>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <li key={product.id}>{product.name}</li>
          ))
        ) : (
          <li>No products found for this type.</li>
        )}
      </ul>
    </section>
  );
}