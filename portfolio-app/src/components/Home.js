import React from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
    width: 100%;
`;
export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Image src={require('../assets/panda.jpg')} alt="panda" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero rhoncus, condimentum augue id, ullamcorper ex. Phasellus ut quam at quam fringilla commodo nec dapibus neque. In tempus rutrum lacus at sollicitudin. Vivamus convallis semper nisl sit amet venenatis. Sed finibus feugiat lorem, in accumsan eros pulvinar et. Phasellus gravida ipsum id consequat pharetra. Vivamus non dui nulla. Sed iaculis urna eu rhoncus blandit. Aenean at ante quis sem sodales ullamcorper. Duis erat ligula, elementum sed velit ac, pulvinar vulputate magna. Nam mattis lorem et massa hendrerit, a elementum elit iaculis. Aliquam finibus quis augue pellentesque gravida. Integer sapien augue, imperdiet ac accumsan at, viverra nec orci. Ut lobortis leo nulla, in elementum est vehicula laoreet. Nunc eget suscipit urna. Aliquam erat volutpat.</p>
            </Container>
        );
    }
}