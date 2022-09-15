import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Atraves do Index.html ele chama esse arquivo Main.tsx
// Esse arquivo seleciona o root, e renderiza o app(app.tsx)

// ele cria como se fosse uma Tag HTML o App, nesse caso chamado de "componente"
// obs: sempre que uma Tag começar com uma Letra maiuscula, significa que ela é um componente.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
