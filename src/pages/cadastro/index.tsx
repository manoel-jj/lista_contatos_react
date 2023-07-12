import Formulario from '../../containers/AdicionarContato'
import BarraLateral from '../../containers/BarraLateral'

const Cadastro = () => (
  <>
    <BarraLateral mostrarBarra={false} />
    <Formulario />
  </>
)

export default Cadastro
