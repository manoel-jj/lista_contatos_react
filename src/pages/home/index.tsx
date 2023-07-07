import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraLateral mostrarBarra={true} />
    <ListaDeContatos />
  </>
)

export default Home
