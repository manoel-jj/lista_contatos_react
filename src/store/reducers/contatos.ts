import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/Contato'

type ContatosState = {
  listaContatos: Contatos[]
}

const initialState: ContatosState = {
  listaContatos: []
}

const ContatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.listaContatos = [
        ...state.listaContatos.filter(
          (contato) => contato.id !== action.payload
        )
      ]
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.listaContatos.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.listaContatos[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoJaExiste = state.listaContatos.find(
        (contato) =>
          contato.nome.toLocaleUpperCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato =
          state.listaContatos[state.listaContatos.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.listaContatos.push(contatoNovo)
        console.log('Estado atualizado:', [...state.listaContatos])

        console.log('Estado atualizado:', state.listaContatos)
      }
    }
  }
})

export const { remover, editar, cadastrar } = ContatosSlice.actions

export default ContatosSlice.reducer
