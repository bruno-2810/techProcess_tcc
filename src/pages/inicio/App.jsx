import Cabecalho from '../../components/cabecalho';
import Secao1 from '../../components/secao1';
import Secao2 from '../../components/secao2';
import './App.scss';

function App() {
  return (
    <div className='pagina-inicio'>
      <Cabecalho />
      <Secao1 />
      <Secao2 />
    </div>
  )
}

export default App;
