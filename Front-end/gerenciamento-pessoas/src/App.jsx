import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/teste/";

function App() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setMensagem(response.data.message))
      .catch(error => console.error("Erro na requisição:", error));
  }, []);

  return (
    <div>
      <h1>Teste de Conexão</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;