import * as S from './styles'
import imageUser from '../../image/user.svg'

const BarraLateral = () => {
  return (
    <S.Aside>
      <S.imgContato>
        <img src={imageUser} alt="user" />
        <span>Contatos</span>
      </S.imgContato>

      <S.linkLateral>
        <div>
          <a href="">Contatos</a>
        </div>
        <div>
          <a href="">Favoritos</a>
        </div>
        <a href="/cadastro">
          <button>Criar novo contato</button>
        </a>
      </S.linkLateral>
    </S.Aside>
  )
}

export default BarraLateral
