import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'
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
    if (nome && email && telefone) {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone
        })
      )
      navigate('/')
    } else {
      alert('Por favor, preencha todos os campos.')
    }
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
          required
        />
        <input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="email"
          required
        />
        <InputMask
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          mask="(99) 9 9999-9999"
          placeholder="telefone"
        />
        <button type="submit">Cadastrar</button>
      </form>
    </S.FormContainer>
  )
}

export default Formulario
