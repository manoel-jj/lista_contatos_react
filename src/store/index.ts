import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatos'

//Não há necessidade de alteração nessa parte, pois toda a logica pode ser aproveitada da store

const store = configureStore({
  reducer: {
    contato: contatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
