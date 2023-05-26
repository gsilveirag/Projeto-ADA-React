import MeuComponent from "./components/MeuComponent"

function App() {


  return (
    <>
      <h1>Ola mundo!</h1>
      <p>Programador de Desenvolvimento:<strong> Gustavo Gonçalves </strong></p>
      <MeuComponent/>

      <MeuBotao conteudo='me clique' />
      <MeuBotao conteudo='depois aqui' />
      <MeuBotao conteudo='por ultimo aqui' />
    </>
    )
}




function MeuBotao(props) {
  return(
    <button type="submit">{props.conteudo}</button>
  )
}

export default App