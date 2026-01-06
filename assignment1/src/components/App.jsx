import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  // 1. State Tanımlamaları
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <h1>React Product Dashboard</h1>

      {/* İsim Girişi (Controlled Input) */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="İsminizi girin..." 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <p>Merhaba, <strong>{name ? name : "Ziyaretçi"}</strong></p>
      </div>

      {/* Göster/Gizle Butonu */}
      <button 
        onClick={() => setShowProducts(!showProducts)}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: showProducts ? '#ff4d4d' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <hr style={{ margin: '20px 0' }} />

      {/* Koşullu Rendering */}
      {showProducts && <ProductList />}
    </div>
  );
}

export default App;