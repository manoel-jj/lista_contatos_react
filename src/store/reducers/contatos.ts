// // reducers.ts
// import {
//   ContatosActionsTypes,
//   ContatosAction
// } from '../../components/utils/enums/contatosEnums'

// interface Contato {
//   id: number
//   nome: string
//   email: string
//   telefone: string
// }

// interface ContatosState {
//   contatos: Contato[]
// }

// const initialState: ContatosState = {
//   contatos: []
// }

// const contatosReducer = (
//   state = initialState,
//   action: ContatosAction
// ): ContatosState => {
//   switch (action.type) {
//     case ContatosActionsTypes.ADICIONAR_CONTATO:
//       // eslint-disable-next-line no-case-declarations
//       const novoContato: Contato = {
//         id: state.contatos.length + 1,
//         nome: action.payload.nome,
//         email: action.payload.email,
//         telefone: action.payload.telefone
//       }
//       return {
//         ...state,
//         contatos: [...state.contatos, novoContato]
//       }
//     case ContatosActionsTypes.REMOVER_CONTATO:
//       // eslint-disable-next-line no-case-declarations
//       const contatosAtualizados = state.contatos.filter(
//         (contato) => contato.id !== action.payload.id
//       )
//       return {
//         ...state,
//         contatos: contatosAtualizados
//       }
//     default:
//       return state
//   }
// }

// export default contatosReducer
