import { injectGlobal } from 'styled-components';
import {
    black,
    white 
    } from '../theme/variables'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Cabin');

    body {
        font-family: 'Cabin', sans-serif;
        font-size: 24px;
        color: ${black};
        background-color: ${white}
    }

    h1, h2, h3 {
        font-weight: normal;
    }
`