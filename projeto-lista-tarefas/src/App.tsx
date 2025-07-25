// App.tsx
import { useState } from 'react';
import './App.css';
import { adicionaTarefa, removeTarefa } from './utils/lista';

function App() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleAdicionar = () => {
    const novaLista = adicionaTarefa(tarefas, novaTarefa);
    setTarefas(novaLista);
    setNovaTarefa('');
  };

  const handleRemover = (index: number) => {
    const novaLista = removeTarefa(tarefas, index);
    setTarefas(novaLista);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Lista de Tarefas</h2>

      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
        style={{ marginRight: 10 }}
      />
      <button onClick={handleAdicionar}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => handleRemover(index)} style={{ marginLeft: 10 }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


  
