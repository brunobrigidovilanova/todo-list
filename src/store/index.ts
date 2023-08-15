import { configureStore } from '@reduxjs/toolkit'

import contatosReducers from './reducers/contatos'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducers,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
