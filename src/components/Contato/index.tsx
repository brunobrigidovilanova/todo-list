import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  descricao: decricaoOriginal,
  categoria,
  status,
  titulo: tituloOriginal,
  id,
  email: emailOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [email, setEmail] = useState('')
  const [titulo, setTitulo] = useState('')

  useEffect(() => {
    if (decricaoOriginal.length > 0) {
      setDescricao(decricaoOriginal)
    }
  }, [decricaoOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (tituloOriginal.length > 0) {
      setTitulo(tituloOriginal)
    }
  }, [tituloOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(decricaoOriginal)
    setEmail(emailOriginal)
    setTitulo(tituloOriginal)
  }

  return (
    <S.Card>
      <S.Titulo
        disabled={!estaEditando}
        value={titulo}
        onChange={(evento) => setTitulo(evento.target.value)}
      />
      <S.Tag parametro="categoria" categoria={categoria}>
        {categoria}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    categoria,
                    status,
                    titulo,
                    id,
                    email
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
