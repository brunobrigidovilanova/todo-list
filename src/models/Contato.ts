import * as enums from '../utils/enums/Contato'

class Contato {
  titulo: string
  categoria: enums.Categoria
  status?: enums.Status
  descricao: string
  id: number
  email: string

  constructor(
    titulo: string,
    categoria: enums.Categoria,
    status: enums.Status,
    descricao: string,
    id: number,
    email: string
  ) {
    this.titulo = titulo
    this.categoria = categoria
    this.status = status
    this.descricao = descricao
    this.id = id
    this.email = email
  }
}

export default Contato
