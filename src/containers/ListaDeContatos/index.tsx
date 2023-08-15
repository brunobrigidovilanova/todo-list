import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltradas = itens
    if (termo !== undefined) {
      contatosFiltradas = contatosFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'categoria') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.categoria === valor
        )
      } else if (criterio === 'status') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return contatosFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrage = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todos') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todos ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltrage(contatos.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.titulo}>
            <Contato
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              categoria={t.categoria}
              email={t.email}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
