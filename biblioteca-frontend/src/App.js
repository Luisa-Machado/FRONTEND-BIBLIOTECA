// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ListaLivros from './view/ListaLivros';
import AdicionarLivro from './view/AdicionarLivro';

const App = () => {
  const [livros, setLivros] = useState([]);
  const [livroEditando, setLivroEditando] = useState(null);
  const [novoLivro, setNovoLivro] = useState({ titulo: '', autor: '', ano_publicacao: '' });
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    carregarLivros();
  }, []);

  const carregarLivros = async () => {
    try {
      const response = await axios.get('http://localhost:3000/livros'); // Corrigi a URL
      setLivros(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditar = (livro) => {
    setLivroEditando(livro);
  };

  const handleSalvar = async () => {
    try {
      if (livroEditando) {
        await axios.put(`http://localhost:3000/livros/${livroEditando.id}`, livroEditando);
        setMensagem('Livro atualizado com sucesso!');
        setLivroEditando(null);
        carregarLivros();
      }
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao atualizar o livro.');
    }
  };

  const handleCancelarEdicao = () => {
    setLivroEditando(null);
  };

  const handleDeletar = async (livroId) => {
    try {
      await axios.delete(`http://localhost:3000/livros/${livroId}`);
      setMensagem('Livro excluído com sucesso!');
      carregarLivros();
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao excluir o livro.');
    }
  };

  const handleNovoLivroChange = (e) => {
    setNovoLivro({ ...novoLivro, [e.target.name]: e.target.value });
  };

  const handleAdicionarNovoLivro = async () => {
    try {
      await axios.post('http://localhost:3000/livros', novoLivro);
      setMensagem('Livro adicionado com sucesso!');
      setNovoLivro({ titulo: '', autor: '', ano_publicacao: '' });
      carregarLivros();
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao adicionar o novo livro.');
    }
  };

  return (
    <div className="livros-container">
      <AdicionarLivro
        novoLivro={novoLivro}
        handleNovoLivroChange={handleNovoLivroChange}
        handleAdicionarNovoLivro={handleAdicionarNovoLivro}
      />
      <ListaLivros
        livros={livros}
        livroEditando={livroEditando}
        handleEditar={handleEditar}
        handleSalvar={handleSalvar}
        handleCancelarEdicao={handleCancelarEdicao}
        handleDeletar={handleDeletar}
      />
    </div>
  );
};

export default App;
