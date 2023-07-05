import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'

//Não há necessidade de alteração nessa parte, pois toda a logica pode ser aproveitada da store

const store = configureStore({
  reducer: {
    contato: contatoReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
