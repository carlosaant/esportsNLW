/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    // como esta sendo colocado classe tailwind dentro do html, precisa declarar aqui no content tambem como um arquivo de conteudo
    './index.html'
  ],

  theme: {
    // setar cores
    // setar a imagem de fundo diretamente
    // criar propriedades
    extend: {
      // alterar as fontes padrao
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        //enviar para pasta Public, para poder ser acessado publicamente pelo endereço
        backgroundGalaxy: "url('/background-galaxy.png')",
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 40.57%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    }
  },
  plugins: []
};
