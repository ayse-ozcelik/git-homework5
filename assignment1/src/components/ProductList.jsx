import Product from './Product';

const ProductList = () => {
  const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Phone", price: 800 },
    { id: 3, title: "Tablet", price: 600 }
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Ürün Listesi</h2>
      {products.map((item) => (
        <Product 
          key={item.id} 
          title={item.title} 
          price={item.price} 
        />
      ))}
    </div>
  );
};

export default ProductList;