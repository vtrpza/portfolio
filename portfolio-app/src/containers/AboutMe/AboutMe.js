import React, { Component } from 'react'
import {Container, Flex} from '../../theme/grid';
import { Title , P } from './AboutMe.style';

export default class AboutMe extends Component {
    render() {
        return (
            <Container>
                <Title>Sobre mim</Title>
                <Flex justify="center">
                    <h2>Meu nome é Vitor e tenho 22 anos.</h2>
                </Flex>
                    <P>Amo lutar jiu-jitsu e programar, meu esporte favorito está entre MMA e jiu-jitsu, sou fã de esportes de combate em geral e praticar jiu-jitsu é meu maior hobby.</P>
                    <P>Comecei a estudar programação na faculdade, aos 18 anos e desde lá sou apaixonado por programar e criar. Meu maior foco no momento é desenvolver em React.js. React.js é uma library do Facebook para JavaScript que trabalha com componentes, props e states (in a nutshell).</P>
                    <P>Amo desafios, estou sempre buscando me superar, melhorar minhas habilidades e expandir meus conhecimentos. Criei esse portfólio para mostrar ao mundo um pouco sobre mim.</P>
            </Container>
        )
    }
}
