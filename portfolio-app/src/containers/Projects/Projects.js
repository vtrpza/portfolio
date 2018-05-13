import React, { Component } from 'react'
import Zoomy from 'react-zoomy';
import {
    ImageButton
} from './Projects.style';
import { Container } from '../../theme/grid';

export default class Projects extends Component {
    render() {
        return (
            <Container>
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
                        width: '100vw',
                        height: 'auto'
                        }
                    }}
                />
            </Container>
        )
    }
}
