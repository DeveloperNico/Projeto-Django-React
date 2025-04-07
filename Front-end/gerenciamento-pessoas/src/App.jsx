import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/teste')
      .then(response => setMensagem(response.data.message))
      .catch(error => console.error('Erro na requisição:', error));
  }, []);

  return (
    <div>
      <h1>Teste de Conexão</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;