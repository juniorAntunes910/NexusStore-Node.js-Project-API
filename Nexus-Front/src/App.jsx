import { useEffect, useState } from 'react';
import { api } from './services/api'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //Busca produtos da api
    api.get('/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Nexus Store - Hardware</h1>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
        {products.map(product => (
          <div key={product.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>R${product.price}</span>
            <br></br>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  )

}

export default App;
