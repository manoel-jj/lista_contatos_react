import { useState } from 'react'
import * as S from './styles'

export type Contato = {
  nome: string
  email: string
  telefone: string
}

function ListaDeContatos() {
  const [contatos, setContatos] = useState<Contato[]>([])
  const [novoContato, setNovoContato] = useState({
    nome: '',
    email: '',
    telefone: ''
  })

  const adicionarContato = () => {
    setContatos([...contatos, novoContato])
    setNovoContato({
      nome: '',
      email: '',
      telefone: ''
    })
  }

  const atualizarContato = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNovoContato({
      ...novoContato,
      [event.target.name]: (event.target as HTMLInputElement).value
    })
  }

  const excluiContato = (index: number) => {
    const novosContatos = [...contatos]
    novosContatos.splice(index, 1)
    setContatos(novosContatos)
  }

  return (
    <>
      <div>
        <S.Pesquisa type="text" placeholder="Pesquisa" />

        <div>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {contatos.map((contato, index) => (
                <tr key={index}>
                  <td>{contato.nome}</td>
                  <td>{contato.email}</td>
                  <td>{contato.telefone}</td>
                  <td>
                    <button onClick={() => excluiContato(index)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Adcionar Contato</h3>
          <form>
            <label>
              Nome:
              <input
                type="text"
                name="nome"
                value={novoContato.nome}
                onChange={atualizarContato}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={novoContato.email}
                onChange={atualizarContato}
              />
            </label>
            <br />
            <label>
              Telefone:
              <input
                type="tel"
                name="telefone"
                value={novoContato.telefone}
                onChange={atualizarContato}
              />
            </label>
            <br />
            <button type="button" onClick={adicionarContato}>
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ListaDeContatos
