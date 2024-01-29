// controllers/LivrosController.js
import axios from 'axios';

const LivrosController = {
  carregarLivros: async () => {
    try {
      const response = await axios.get('http://localhost:3001/livros');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // Outras funções relacionadas à manipulação de livros...
};

export default LivrosController;
