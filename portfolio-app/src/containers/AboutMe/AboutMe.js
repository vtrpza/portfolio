import React, { Component } from 'react'
import {Container, Flex} from '../../theme/grid';
import { Title } from './AboutMe.style';

export default class AboutMe extends Component {
    render() {
        return (
            <Container>
                <Title>Sobre mim</Title>
                <Flex justify="center">
                    <h2>Meu nome é Vitor e eu tenho 22 anos.</h2>
                </Flex>
                    <p>Amo lutar jiu-jitsu e programar, meu esporte favorito está entre MMA e jiu-jitsu, sou fã de esportes de combate em geral e praticar jiu-jitsu é meu maior hobby.</p>
                    <p>Comecei a estudar programação na faculdade, aos 18 anos e desde lá sou apaixonado por programar e criar. Meu maior foco no momento é desenvolver em React.js. React.js é um framework do Facebook para JavaScript que trabalha com componentes, props e states (in a nutshell).</p>
                    <p>Amo desafios, estou sempre buscando me superar, melhorar minhas habilidades e expandir meus conhecimentos. Criei esse portfólio para mostrar ao mundo um pouco sobre mim.</p>
            </Container>
        )
    }
}
