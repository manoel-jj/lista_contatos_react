import * as enums from '../components/utils/enums/contato'

class Contatos {
  nome: enums.nome
  email: enums.email
  telefone: enums.telefone
  id: number

  constructor(
    nome: enums.nome,
    email: enums.email,
    telefone: enums.telefone,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contatos
