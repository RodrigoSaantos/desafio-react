import { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';
import { useCheckbox } from '../../services/hook/Checkbox';

function ItemVertical() {
  const [servers, setServers] = useState([]);
  const { setCheckbox } = useCheckbox();
  const [memory, setMemory] = useState(0)
  const [cpu, setCpu] = useState(0)
  const [disk, setDisk] = useState(0)
  const [qtdSelect, setQtdSelect] = useState(0)

  useEffect(() => {
    api.get('/servers?_sort=hostname')
      .then(response => setServers(response.data));
  }, [])

  useEffect(() => {
    setCheckbox(
      {
        qtdSelect,
        memory,
        cpu,
        disk,
      }
    )
  }, [qtdSelect, memory ,cpu ,disk, setCheckbox])

  function handleCheckbox(event, server) {

    if (event.target.checked === true) {
      setMemory(memory + server.configuracao.memoryProvisioned )
      setCpu(cpu + server.configuracao.cpuProvisioned )
      setDisk(disk + server.configuracao.totalDiskGB )
      setQtdSelect(qtdSelect + 1 )      
    } else {   
      setMemory(memory - server.configuracao.memoryProvisioned )
      setCpu(cpu - server.configuracao.cpuProvisioned )
      setDisk(disk - server.configuracao.totalDiskGB )
      setQtdSelect(qtdSelect - 1 )
    }
  }
  return (
    <>
      <div id='container-table'>
        <table id='table'>
          <thead>
            <tr>
              <th>Select</th>
              <th>Hostname</th>
              <th>Memória</th>
              <th>vCPUs</th>
              <th>Disco</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            {servers.map(server => {
              return (
                <tr key={server.id_vm}>
                  <td>
                    <label className='input-label'>
                      <input 
                        className='checkbox' 
                        type="checkbox" 
                        name={server.hostname} 
                        id={server.hostname} 
                        onChange={(event) => handleCheckbox(event, server)}
                      />
                      <span className='checkmark'></span>
                    </label>
                  </td>
                  <td>{server.hostname}</td>
                  <td>{server.configuracao.memoryProvisioned} GB</td>
                  <td>{server.configuracao.cpuProvisioned} vCPUs</td>
                  <td>{server.configuracao.totalDiskGB} GB</td>
                  <td>{server.configuracao.ip}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export { ItemVertical };
