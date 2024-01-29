// src/components/ListaLivros.js
import React from 'react';

const ListaLivros = ({ livros, livroEditando, handleEditar, handleSalvar, handleCancelarEdicao, handleDeletar }) => {
  return (
    <section className="lista-livros">
      <h2>Lista de Livros</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id} className="livro-item">
            <div className="livro-info">
              <strong>{livro.titulo}</strong> - {livro.autor} ({livro.ano_publicacao})
            </div>
            {livroEditando && livroEditando.id === livro.id ? (
              <>
                <input
                  type="text"
                  name="titulo"
                  value={livroEditando.titulo}
                  onChange={(e) => handleEditar({ ...livroEditando, titulo: e.target.value })}
                />
                <input
                  type="text"
                  name="autor"
                  value={livroEditando.autor}
                  onChange={(e) => handleEditar({ ...livroEditando, autor: e.target.value })}
                />
                <input
                  type="text"
                  name="ano_publicacao"
                  value={livroEditando.ano_publicacao}
                  onChange={(e) => handleEditar({ ...livroEditando, ano_publicacao: e.target.value })}
                />
                <button className="salvar" onClick={handleSalvar}>
                  Salvar
                </button>
                <button className="cancelar" onClick={handleCancelarEdicao}>
                  Cancelar
                </button>
              </>
            ) : (
              <div className="botoes-acoes">
                <button className="editar" onClick={() => handleEditar(livro)}>
                  Editar
                </button>
                <button className="excluir" onClick={() => handleDeletar(livro.id)}>
                  Excluir
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListaLivros;
