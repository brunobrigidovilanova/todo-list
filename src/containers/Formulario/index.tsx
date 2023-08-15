import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.NORMAL)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        categoria,
        descricao,
        email,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          as="textarea"
          placeholder="Nome"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Número do contato"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          as="textarea"
          placeholder="Email"
        />
        <Opcoes>
          <p>Categoria</p>
          {Object.values(enums.Categoria).map((categoria) => (
            <Opcao key={categoria}>
              <input
                value={categoria}
                name="categoria"
                type="radio"
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                id={categoria}
                defaultChecked={categoria === enums.Categoria.NORMAL}
              />{' '}
              <label htmlFor={categoria}>{categoria}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Adicionar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}
export default Formulario
