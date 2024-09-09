import React from 'react'
import './grafico.css'
import { Container, Row, Col} from 'react-bootstrap'

const Grafico = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col></Col>
                <Col>
                <div className="info">
                            <div className="circle-section">
                                <div className="circle blue">
                                    Reflexivo<br />Análise<br />Tecnológica<br />Realista<br />Quieto<br />Solitários
                                </div>
                                <div className="circle red">
                                    Energético<br />Autoritários<br />Corajoso<br />Ambicioso<br />Apaixonado<br />Realista
                                </div>
                                <div className="circle green">
                                    Criativos<br />Constantes<br />Pacientes<br />Empático<br />Espiritual<br />Democratas
                                </div>
                                <div className="circle yellow">
                                    Social<br />Comunicativo<br />Participativo<br />Imprevisível<br />Intelectuais<br />Críticos
                                </div>
                            </div>
                            <p>Saber mais O teste de cores</p>
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Grafico
