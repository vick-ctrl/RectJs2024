
import './App.css'
let personagem = {
  nome :'deadpool',
  poder : 'regenerar',
  altura : '1,80',
  peso : '90kg',
  salario : 10000,
};

function App() {
  

  return (
    <>
     <h1> nome :{personagem.nome}</h1>
     <h1> poder :{personagem.poder}</h1>
     <h1> altura :{personagem.altura}</h1>
     <h1> peso :{personagem.peso}</h1>
     <h1> salario :{personagem.salario}</h1>
    </>
  )
}

export default App
