import React, { Component } from 'react'
import Zoomy from 'react-zoomy';
import {
    ImageButton,
    Index,
    Title,
    H1
} from './Projects.style';
import {
    Container,
    Relative,
    Flex
} from '../../theme/grid';
import { A } from '../../theme/types';

export default class Projects extends Component {
    render() {
        return (
            <Container>
                
                <Title>Meus projetos</Title>

                <Relative marginTop="100px" marginBottom="80px">
                    <Index>
                        <h1>01</h1>
                    </Index>
                    <H1> <A href="https://vtrpza.github.io/weather-reactjs/">Weather-app</A> feito com React e Bootstrap</H1>
                </Relative>
                <Flex justify={'center'} marginBottom="40px">
                    <Zoomy
                        imageUrl={require('../../assets/weather.PNG')}
                        renderThumbnail={({ showImage }) => 
                        <ImageButton  onClick={showImage}>
                            <img width="100%" src={require('../../assets/weather_thumbnail.png')} alt="portfolio"/>
                        </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                        imageProps={{
                            style: {
                            width: '90vw',
                            height: 'auto'
                            }
                        }}
                    />
                </Flex>
                <Flex justify={'center'} marginBottom="120px">
                    <p>
                        Uma aplicação web que mostra o tempo em qualquer lugar do mundo buscando essas informações via API.
                    </p>
                </Flex>

                <Relative marginBottom="80px">
                    <Index>
                        <h1>02</h1>
                    </Index>
                    <H1> <A href="https://vtrpza.github.io/chart/">chart-generator</A> feito com React + Recharts </H1>
                </Relative>
                <Flex justify={'center'} marginBottom="40px">
                    <Zoomy
                        imageUrl={require('../../assets/chart.PNG')}
                        renderThumbnail={({ showImage }) => 
                        <ImageButton  onClick={showImage}>
                            <img width="100%" src={require('../../assets/chart_thumbnail.png')} alt="red-panda"/>
                        </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                        imageProps={{
                            style: {
                            width: '90vw',
                            height: 'auto'
                            }
                        }}
                    />
                </Flex>
                <Flex justify={'center'} marginBottom="120px">
                    <p>
                        Um gerador de gráficos que mostram o rendimento de dois tipos de investimento: Tesouro Real pré-fixado e Bitcoin.
                    </p>
                </Flex>


                <Relative marginBottom="80px">
                    <Index>
                        <h1>03</h1>
                    </Index>
                    <H1> <A href="https://vtrpza.github.io/reminder-app/">Reminder-App</A> feito com React e Redux </H1>
                </Relative>
                <Flex justify={'center'} marginBottom="40px">
                    <Zoomy
                        imageUrl={require('../../assets/reminder.PNG')}
                        renderThumbnail={({ showImage }) => 
                        <ImageButton  onClick={showImage}>
                            <img width="100%" src={require('../../assets/reminder_thumbnail.png')} alt="portfolio"/>
                        </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                        imageProps={{
                            style: {
                            width: '90vw',
                            height: 'auto'
                            }
                        }}
                    />
                </Flex>
                <Flex justify={'center'} marginBottom="120px">
                    <p>
                        Uma aplicação web que gera uma agenda online. Feito com React + Redux e bootstrap.
                    </p>
                </Flex>

                <Relative marginBottom="80px">
                    <Index>
                        <h1>04</h1>
                    </Index>
                    <H1> <A href="https://github.com/vtrpza/portfolio">portfólio</A> feito com React e Styled-Components </H1>
                </Relative>
                <Flex justify={'center'} marginBottom="40px">
                    <Zoomy
                        imageUrl={require('../../assets/portfolio.PNG')}
                        renderThumbnail={({ showImage }) => 
                        <ImageButton  onClick={showImage}>
                            <img width="100%" src={require('../../assets/portfolio_thumbnail.png')} alt="portfolio"/>
                        </ImageButton>
                        }
                        scale={[1.1, 1.1]}
                        imageProps={{
                            style: {
                            width: '90vw',
                            height: 'auto'
                            }
                        }}
                    />
                </Flex>
                <Flex justify={'center'} marginBottom="120px">
                    <p>
                        Meu portfolio (este que você está visitando agora), feito com React.js e Styled-Components. 100% JavaScript.
                    </p>
                </Flex>
                
            </Container>
        )
    }
}
