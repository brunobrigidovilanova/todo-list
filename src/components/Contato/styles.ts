import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'
import { Botao } from '../../styles'

type TagProps = {
  categoria?: enums.Categoria
  status?: enums.Status
  parametro: 'status' | 'categoria'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'categoria') {
    if (props.categoria === enums.Categoria.AMIGOS) return variaveis.vermelho
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.textarea`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  display: block;
  width: 100%;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  padding-top: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto mono', monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Email = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
