import { FormEvent, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import * as S from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <S.FormContainer>
      <h3>Adicionar novo contato</h3>
      <form onSubmit={cadastrarContato}>
        <input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="number"
          placeholder="telefone"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </S.FormContainer>
  )
}

export default Formulario
