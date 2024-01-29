// src/components/AdicionarLivro.js
import React from 'react';

const AdicionarLivro = ({ novoLivro, handleNovoLivroChange, handleAdicionarNovoLivro }) => {
  return (
    <section className="adicionar-livro">
      <h2>Adicionar Livro</h2>
      <input type="text" name="titulo" placeholder="Título" value={novoLivro.titulo} onChange={handleNovoLivroChange} />
      <input type="text" name="autor" placeholder="Autor" value={novoLivro.autor} onChange={handleNovoLivroChange} />
      <input
        type="text"
        name="ano_publicacao"
        placeholder="Ano de Publicação"
        value={novoLivro.ano_publicacao}
        onChange={handleNovoLivroChange}
      />
      <button onClick={handleAdicionarNovoLivro}>Adicionar Livro</button>
    </section>
  );
};

export default AdicionarLivro;
