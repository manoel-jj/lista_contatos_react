import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  termo?: string
  criterio: 'nome' | 'email' | 'telefone'
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'nome'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteratermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
    }
  }
})

export const { alteratermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
