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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero rhoncus, condimentum augue id, ullamcorper ex. Phasellus ut quam at quam fringilla commodo nec dapibus neque. In tempus rutrum lacus at sollicitudin. Vivamus convallis semper nisl sit amet venenatis. Sed finibus feugiat lorem, in accumsan eros pulvinar et. Phasellus gravida ipsum id consequat pharetra. Vivamus non dui nulla. Sed iaculis urna eu rhoncus blandit. Aenean at ante quis sem sodales ullamcorper. Duis erat ligula, elementum sed velit ac, pulvinar vulputate magna. Nam mattis lorem et massa hendrerit, a elementum elit iaculis. Aliquam finibus quis augue pellentesque gravida. Integer sapien augue, imperdiet ac accumsan at, viverra nec orci. Ut lobortis leo nulla, in elementum est vehicula laoreet. Nunc eget suscipit urna. Aliquam erat volutpat.
                        </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView}) =>
                        <RevealP hide={!isInView}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero rhoncus, condimentum augue id, ullamcorper ex. Phasellus ut quam at quam fringilla commodo nec dapibus neque. In tempus rutrum lacus at sollicitudin. Vivamus convallis semper nisl sit amet venenatis. Sed finibus feugiat lorem, in accumsan eros pulvinar et. Phasellus gravida ipsum id consequat pharetra. Vivamus non dui nulla. Sed iaculis urna eu rhoncus blandit. Aenean at ante quis sem sodales ullamcorper. Duis erat ligula, elementum sed velit ac, pulvinar vulputate magna. Nam mattis lorem et massa hendrerit, a elementum elit iaculis. Aliquam finibus quis augue pellentesque gravida. Integer sapien augue, imperdiet ac accumsan at, viverra nec orci. Ut lobortis leo nulla, in elementum est vehicula laoreet. Nunc eget suscipit urna. Aliquam erat volutpat.
                        </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView}) =>
                        <RevealP hide={!isInView}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero rhoncus, condimentum augue id, ullamcorper ex. Phasellus ut quam at quam fringilla commodo nec dapibus neque. In tempus rutrum lacus at sollicitudin. Vivamus convallis semper nisl sit amet venenatis. Sed finibus feugiat lorem, in accumsan eros pulvinar et. Phasellus gravida ipsum id consequat pharetra. Vivamus non dui nulla. Sed iaculis urna eu rhoncus blandit. Aenean at ante quis sem sodales ullamcorper. Duis erat ligula, elementum sed velit ac, pulvinar vulputate magna. Nam mattis lorem et massa hendrerit, a elementum elit iaculis. Aliquam finibus quis augue pellentesque gravida. Integer sapien augue, imperdiet ac accumsan at, viverra nec orci. Ut lobortis leo nulla, in elementum est vehicula laoreet. Nunc eget suscipit urna. Aliquam erat volutpat.
                        </RevealP>
                    }
                </WhenInView>
            </Container>
        );
    }
}