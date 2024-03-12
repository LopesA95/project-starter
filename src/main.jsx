import React from 'react'; // Importando React
import ReactDOM from 'react-dom/client'; // Importando ReactDOM
import { ThemeProvider } from 'styled-components'; // Importando ThemeProvider de styled-components para fornecer o tema para a aplicação
import { Routes } from './routes'; // Importando o componente Routes para gerenciar as rotas da aplicação

import theme from './styles/theme'; // Importando o tema da aplicação
import GlobalStyles from './styles/global'; // Importando estilos globais da aplicação

// Usando ReactDOM.createRoot para renderizar a aplicação
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Provendo o tema para a aplicação */}
      <GlobalStyles /> {/* Incluindo estilos globais */}
      <Routes /> {/* Renderizando as rotas da aplicação */}
    </ThemeProvider>
  </React.StrictMode>,
);
