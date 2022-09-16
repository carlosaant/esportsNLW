import './styles/main.css';

// importar imagem por dentro do Js
import logoImagem from './assets/logo-nlw-esports.svg'

// -------------------------

function App() {
    return (
      // className='w-8 h-8 bg-violet-500'
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImagem} alt="Logo do NLW Esports" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
          </h1>
      </div>
    )
}

export default App
