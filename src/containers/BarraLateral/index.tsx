import * as S from './styles'
import imageUser from '../../image/user.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarBarra: boolean
}

const BarraLateral = ({ mostrarBarra }: Props) => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      <S.imgContato>
        <img src={imageUser} alt="user" />
        <span>Contatos</span>
      </S.imgContato>
      <div>
        {mostrarBarra ? (
          <S.linkLateral>
            <div>
              <a href="">Contatos</a>
            </div>

            <a href="/cadastro">
              <button>Criar novo contato</button>
            </a>
          </S.linkLateral>
        ) : (
          <button type="button" onClick={() => navigate('/')}>
            Voltar a lista de Contatos
          </button>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
