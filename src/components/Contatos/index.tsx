import { useDispatch } from 'react-redux'
import ContatosClass from '../../models/Contato'
import * as S from './styles'
import { remover } from '../../store/reducers/contatos'

type Props = ContatosClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <>
      <tr>
        <S.Nome>{nome}</S.Nome>
        <S.Email>{email}</S.Email>
        <S.Telefone>{telefone}</S.Telefone>
        <S.Acoes>
          {' '}
          <div>
            <>
              <button onClick={() => dispatch(remover(id))}>remover</button>
            </>
          </div>
        </S.Acoes>
      </tr>
    </>
  )
}

export default Contato
