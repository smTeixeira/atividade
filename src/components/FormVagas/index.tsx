import React from 'react'
import { FormEvent, useState } from 'react'

import { VagasFormulario, VagasBotao, VagasCampo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <VagasFormulario onSubmit={aoEnviarForm}>
      <VagasCampo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <VagasBotao type="submit">Pesquisar</VagasBotao>
    </VagasFormulario>
  )
}
export default FormVagas
