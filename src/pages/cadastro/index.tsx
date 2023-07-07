import Formulario from '../../containers/AdicionarContato'
import BarraLateral from '../../containers/BarraLateral'

const cadastro = () => (
  <>
    <BarraLateral mostrarBarra={false} />
    <Formulario />
  </>
)

export default cadastro
