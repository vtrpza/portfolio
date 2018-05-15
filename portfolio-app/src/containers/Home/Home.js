import React from 'react';
import {Container} from '../../theme/grid';
import {
    MainImage,
    RevealP
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <MainImage>
                    <h1>Vitor Pouza</h1>
                    <h2>Desenvolvedor Front-end</h2>   
                </MainImage>
                <WhenInView>
                    {({ isInView}) =>
                        <RevealP hide={!isInView}>
                            Olá. Seja bem-vindo ao meu portfólio! Meu nome é Vitor, sou programador front-end e meu foco (no momento) é JavaScript(react.js). Busco ingressar profissionalmente como Desenvolvedor Web e possuo como foco e objetivo sempre melhorar minhas habilidades e conhecimentos.
                        </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView}) =>
                        <RevealP hide={!isInView}>
                           Usarei este portfólio como uma plataforma para mostrar um pouco a minha personalidade e também as minhas habilidades como programador.
                        </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView}) =>
                        <RevealP hide={!isInView}>
                            Este portfólio fiz inteiramente em React.js e Styled-Components, e utilizando algumas libraries, como por exemplo react-waypoint. O código fonte desse projeto está disponível na página de Projetos. Este site ainda está sob desenvolvimento.
                        </RevealP>
                    }
                </WhenInView>
               
              
            </Container>
        );
    }
}