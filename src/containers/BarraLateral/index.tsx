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
            <S.botao type="button" onClick={() => navigate('novocontato')}>
              Criar novo contato
            </S.botao>
          </S.linkLateral>
        ) : (
          <S.botao type="button" onClick={() => navigate('/')}>
            Voltar a lista de Contatos
          </S.botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
