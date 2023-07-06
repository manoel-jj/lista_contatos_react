import { useDispatch } from 'react-redux'
import ContatosClass from '../../models/Contato'
import { useState } from 'react'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatosClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()

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
            <S.Acoes>
              {' '}
              <div>
                {estaEditando ? (
                  <>
                    <button
                      onClick={() => {
                        dispatch(
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
                    <tr>
                      <button onClick={() => setEstaEditando(true)}>
                        editar
                      </button>
                    </tr>
                    <button onClick={() => dispatch(remover(id))}>
                      remover
                    </button>
                  </>
                )}
              </div>
            </S.Acoes>
          </tr>
        </tbody>
      </S.Table>
    </>
  )
}

export default Contato
