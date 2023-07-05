import { useSelector } from 'react-redux'
import Contato from '../../components/Contatos'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { lista } = useSelector((state: RootReducer) => state.contato)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltradas = lista
    if (termo !== undefined) {
      contatosFiltradas = contatosFiltradas.filter(
        (lista) => lista.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltradas
    }
  }
  const contatos = filtraContatos() ?? []

  return (
    <>
      <div>
        <S.Pesquisa type="text" placeholder="Pesquisa" />

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
            {contatos.map((t) => (
              <tr key={t.nome}>
                <Contato
                  id={t.id}
                  nome={t.nome}
                  email={t.email}
                  telefone={t.telefone}
                />
                <td>
                  <button>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </div>
    </>
  )
}

export default ListaDeContatos
