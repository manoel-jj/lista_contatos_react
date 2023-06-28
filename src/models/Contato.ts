import * as enums from '../components/utils/enums/contato'

// models demonstr ser bem util para toda alogica do programa em si

class Contatos {
  nome: string
  email: string
  telefone: string
  id: number

  constructor(
    nome: enums.Nome,
    email: enums.Email,
    telefone: enums.Telefone,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contatos
