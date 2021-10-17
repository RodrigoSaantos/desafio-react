import { useCheckbox } from '../../services/hook/Checkbox';
import './styles.css'

function Summary() {
  const { checkbox } = useCheckbox();
  return (
    <div id="container">
      <div className="row">
        <p className='title'>Servidores Selecionados</p>
        <span className='specification'>{checkbox.qtdSelect} servidores selecionados</span>
      </div>
      <div className="row">
        <p className='title'>Total de Memória</p>
        <span className='specification'>{checkbox.memory} GB</span>
      </div>
      <div className="row">
        <p className='title'>Total de CPUs</p>
        <span className='specification'>{checkbox.cpu} vCPUs</span>
      </div>
      <div className="row" style={{ borderBottom: '0' }}>
        <p className='title'>Total de Discos</p>
        <span className='specification'>{checkbox.disk} GB</span>
      </div>
    </div>
  )
}

export { Summary };
