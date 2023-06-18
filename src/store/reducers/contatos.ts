import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/Contato'

type ContatosState = {
  lista: Contatos[]
}

const initialState: ContatosState = {
  lista: []
}

const ContatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.lista = [
        ...state.lista.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.lista.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.lista[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoJaExiste = state.lista.find(
        (contato) =>
          contato.nome.toLocaleUpperCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.lista[state.lista.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.lista.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = ContatosSlice.actions

export default ContatosSlice.reducer
