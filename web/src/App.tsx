//React Sintaxe: JSX (Javascrip + XML)
// permite escrever html dentro da funçao Js, componentes.

interface ButtonProps{
  title : string
}

function Button(propiedades: ButtonProps){
  return (
    <button>
       {propiedades.title}
    </button>
  )
}

function App() {
    return (
      <div>
        <Button title="Enviar 1"/>
        <Button title="Hello World"/>
      </div>
    )
}

export default App
