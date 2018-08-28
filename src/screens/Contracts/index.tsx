import Button from 'COMP/Button'
import Input from 'COMP/Input'
import TextArea from 'COMP/TextArea'
import TextTitle from 'COMP/TextTitle'
import Toolbar from 'COMP/Toolbar'
import * as React from 'react'

import backIcon from 'STATIC/img/back.svg'

import './Contracts.css'

const contract = `Dessa forma, o termo de uso é caracterizado por conter as regras para utilização do serviço, sendo de interesse do proprietário do site/app possuir este tipo de contrato eletrônico para se resguardar de quaisquer riscos jurídicos. Por meio deste instrumento o prestador dos serviços pode delimitar as situações em que será responsável e por quais situações não poderá ser imputável em caso de falhas. Para tanto, devem ser tomadas algumas precauções.

Em primeiro lugar, é importante definir exatamente o significado dos termos utilizados no documento. Um site ou app geralmente possui uma linguagem muito específica, que pode gerar dúvidas, motivo pelo qual a definição exata dos termos utilizados nos serviços oferecidos é imprescindível.

Da mesma forma, a delimitação exata do escopo do serviço que o site/app oferece é importante para evitar quaisquer reclamações futuras que não estejam relacionadas ao que o site/app oferece aos seus usuários.

Em segundo lugar, se a ideia deste tipo de documento é limitar as responsabilidades do proprietário do site/app, a utilização de cláusulas do tipo “disclaimer” ou quaisquer cláusulas excludentes de responsabilidade podem ser interessantes, desde que elaboradas dentro dos limites legais.

“Disclaimers” são aqueles avisos que vemos constantemente em sites que oferecem serviços, como por exemplo: “Todas as opiniões expressadas nos comentários deste site não expressam a opinião da [•], mas tão somente a opinião de quem os escreveu”. Eles visam oferecer aos consumidores e usuários algumas informações, regras e limites do serviço/produto para evitar quaisquer futuros litígios.

Além dos disclaimers, há também a figura das cláusulas excludentes de responsabilidade. É o caso de cláusulas do tipo “O [•] não se responsabiliza por qualquer dano ou prejuízo com envio de informações ou de conteúdo publicitário que não tenham sido disparados pelo próprio [•], sejam esses últimos legítimos ou indesejados (SPAM), e também não se responsabiliza pelo conteúdo das opiniões postadas em [•]”.

Neste tipo de contrato não há qualquer espaço para o usuário discutir cláusulas para que estas constem no documento, motivo pelo qual se trata de um contrato de adesão. Neste ponto, surge um aspecto relevante, o direito do consumidor. Por ser um contrato de adesão e não haver espaço para discussão das cláusulas contidas no termo de uso, será necessário colocar cláusulas coerentes e não abusivas para (i) evitar a perda de quaisquer consumidores por conta de um termo de uso mal elaborado; (ii) evitar qualquer risco de processo posterior por infringência a qualquer norma do direito do consumidor.

Por conta desse caráter de contrato de adesão, o formulador deste documento deverá ter muito cuidado com seu conteúdo, pois o que for considerado abusivo poderá facilmente ser desconsiderado em caso de uma controvérsia ser discutida em algum tribunal. Assim, o contrato deixará de ter o efeito que dele se espera`

class Contracts extends React.Component<{}, any> {
  public static defaultProps = {}

  constructor (props: {}) {
    super(props)

    this.state = {
      contract
    }
  }

  public handleOnClick() {
    console.log('clicked')
  }

  public updateState = (key: string) => (value: string | number) => {
    this.setState((state: any) => Object.assign({}, state, { [key]: value }))
  }

  public render () {
    return (
      <div
        className="Contracts--wrapper">
          <Toolbar
            left={true}>
            <Button
              icon={true}
              noBounds={true}
              value={backIcon}
              to="/"
              onClick={this.handleOnClick} />
          </Toolbar>

          <TextTitle
            value="Contratos" />

          <div
            style={{ padding: '0 8px' }}>
            <TextArea
              value={this.state.contract}
              onChange={this.updateState('contract')}
              label="contrato" />

            <Input
              disabled={true}
              label="versao atual"
              value="2" />

            <Button
              block={true}
              outline={true}
              value="atualizar"
              onClick={this.handleOnClick} />
          </div>
      </div>
    )
  }
}

export default Contracts
