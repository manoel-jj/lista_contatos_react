import { useDispatch } from 'react-redux'
import ContatosClass from '../../models/Contato'
import { useState } from 'react'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatosClass

const contato = ({ nome, email, telefone, id }: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispach = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [estaEditando, setEstaEditando] = useState(false)

  function cancelarEdicao() {
    setEstaEditando(false)
  }

  return (
    <>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeader>Nome</S.TableHeader>
            <S.TableHeader>Email</S.TableHeader>
            <S.TableHeader>Telefone</S.TableHeader>
            <S.TableHeader>Ações</S.TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.Nome parametro="nome">{nome}</S.Nome>
            <S.Email parametro="email">{email}</S.Email>
            <S.Telefone parametro="telefone">{telefone}</S.Telefone>
            <td>
              <button>Excluir</button>
            </td>
          </tr>
        </tbody>
      </S.Table>
      <div>
        {estaEditando ? (
          <>
            <button
              onClick={() => {
                dispach(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              salvar
            </button>
            <button onClick={cancelarEdicao}>cancelar</button>
          </>
        ) : (
          <>
            <button onClick={() => setEstaEditando(true)}>editar</button>
            <button onClick={() => dispach(remover(id))}>remover</button>
          </>
        )}
      </div>
    </>
  )
}

export default contato
