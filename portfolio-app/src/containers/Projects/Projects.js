import React, { Component } from 'react'
import Zoomy from 'react-zoomy';
import {
    ImageButton,
    Index
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
                <Relative marginBottom="100px">
                    <Index>
                        <h1>01</h1>
                    </Index>
                    <h1> <A href="https://github.com/vtrpza/chart">chart-generator</A> feito com React + Recharts </h1>
                </Relative>
                <Flex justify={'center'}>
                    <Zoomy
                        imageUrl={require('../../assets/red-panda.jpg')}
                        renderThumbnail={({ showImage }) => 
                        <ImageButton  onClick={showImage}>
                            <img src={require('../../assets/red-panda_thumbnail.jpg')} alt="red-panda"/>
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
            </Container>
        )
    }
}
