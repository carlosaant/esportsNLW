import './styles/main.css';

// icones importado phosphor react
import { MagnifyingGlassPlus } from "phosphor-react";

// importar imagem por dentro do Js
import logoImagem from './assets/logo-nlw-esports.svg'

// -------------------------

function App() {
    return (
      // className='w-8 h-8 bg-violet-500'
      // valor das propriedades *4  ex: cols-6 = 6*4 = 24px  ou 64/4 = 16 entao, uma margin-top seria mt-16
      // overflow-hidden no <a para os arrendodamentos de dentro respeitarem os do elemento pai
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logoImagem} alt="Logo do NLW Esports" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
        </h1>

          
        <div className='grid grid-cols-6 gap-6 mt-16'>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/game-1.png" alt="Game 1" />
            
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='block font-bold text-white'>League of Legends</strong>
              <span className='block text-zinc-300 text-sm'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/game-2.png" alt="Game 2" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='block font-bold text-white'>Dota 2</strong>
              <span className='block text-zinc-300 text-sm'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/game-3.png" alt="Game 3" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='block font-bold text-white'>Counter Strike</strong>
              <span className='block text-zinc-300 text-sm'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/game-4.png" alt="Game 4" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='block font-bold text-white'>Apex Legends</strong>
              <span className='block text-zinc-300 text-sm'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/game-5.png" alt="Game 5" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='block font-bold text-white'>Fortnite</strong>
              <span className='block text-zinc-300 text-sm'>4 anúncios</span>
            </div>
          </a>
          <a href="#" className='relative rounded-lg overflow-hidden'>
            <img src="/game-6.png" alt="Game 6" />
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='block font-bold text-white'>World of Warcraft</strong>
              <span className='block text-zinc-300 text-sm'>4 anúncios</span>
            </div>
          </a>
        </div>

        <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
          <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
            <div>
              <strong className='block text-2xl text-white font-black'>Não encontrou seu Duo?</strong>
              <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
            </div>
            <button className='px-4 py-3 text-white bg-violet-500 rounded hover:bg-violet-700 flex items-center gap-3'>
              <MagnifyingGlassPlus size={24}/>
              Publicar Anúncio
            </button>
          </div>
        </div>
      </div>
    )
}

export default App
