import styled from 'styled-components'
import * as enums from '../utils/enums/contato'

type TagProps = {
  nome?: enums.Nome
  email?: enums.Email
  telefone?: enums.Telefone
  parametro: 'nome' | 'email' | 'telefone'
}

export const Pesquisa = styled.input`
  font-size: 24px;
`
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  color: #444;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`

export const Nome = styled.td<TagProps>`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-weight: bold;
`

export const Email = styled.td<TagProps>`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  color: #4285f4;
`

export const Telefone = styled.td<TagProps>`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  color: #34a853;
`
