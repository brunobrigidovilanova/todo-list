import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      descricao: '(12)12345-6789',
      categoria: enums.Categoria.NORMAL,
      titulo: 'Mario Santos',
      email: 'contato@agenda.com'
    },
    {
      id: 2,
      descricao: '(12)12345-6789',
      categoria: enums.Categoria.NORMAL,
      titulo: 'Roberta Carlos',
      email: 'contato@agenda.com'
    },
    {
      id: 3,
      descricao: '(12)12345-6789',
      categoria: enums.Categoria.TRABALHO,
      titulo: 'Adrian Souza',
      email: 'contato@agenda.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaContato >= 0) {
        state.itens[indexDaContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimaContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
