import { useState } from 'react'
import * as S from './styles'
import Cadastro from '../../pages/cadastro'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import contatos from '../../store/reducers/contatos'

const ListaDeContatos = () => {
  const { lista } = useSelector((state: RootReducer) => state.contato)

  function excluiContato(index: any): void {
    throw new Error('Function not implemented.')
  }

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
            {contatos.map((contato, index) => (
              <tr key={index}>
                <S.Nome>{contato.nome}</S.Nome>
                <S.Email>{contato.email}</S.Email>
                <S.Telefone>{contato.telefone}</S.Telefone>
                <td>
                  <button onClick={() => excluiContato(index)}>Excluir</button>
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

//codigo chat para resolver o poroblema, map não esta presente no reducer deve se usar o metodo abaixo
const contatosReducer: Reducer<ContatosState> = (state, action) => {
  // ...
  const { contatos } = state // Acessando o array de contatos do estado

  // Renderizando as linhas da tabela com base nos contatos
  const linhasTabela = contatos.map((contato, index) => (
    <tr key={index}>
      <S.Nome>{contato.nome}</S.Nome>
      <S.Email>{contato.email}</S.Email>
      <S.Telefone>{contato.telefone}</S.Telefone>
      {/* Coloque aqui o restante do código que você precisa renderizar para cada contato */}
    </tr>
  ))

  // ...

  // Restante da lógica do reducer

  // ...

  // Retorne o resultado final do reducer, incluindo as linhas da tabela
  return {
    ...state,
    linhasTabela: linhasTabela
  }
}
