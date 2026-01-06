import Card from './Card';

const Product = ({ title, price }) => {
  return (
    <Card>
      <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
      <p style={{ color: '#555' }}>Fiyat: ${price}</p>
    </Card>
  );
};

export default Product;