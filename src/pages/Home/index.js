import DefaultLayout from '../../components/DefaultLayout';
import { ItemVertical } from '../../components/ItemVertical';
import { Summary } from '../../components/Summary';
import { Table } from '../../components/Table';
import '../Home/styles.css'

function Home() {
  return (
    <DefaultLayout>
      <main>
        <Table heading="Sumário dos recursos dos servidores" >
          <Summary />
        </Table>
        <Table heading="Tabela de servidores" >
          <ItemVertical />
        </Table>
      </main>
    </DefaultLayout>
  );
}

export default Home;