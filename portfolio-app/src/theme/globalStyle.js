import { injectGlobal } from 'styled-components';
import {
    champagne,
    rblack 
    } from '../theme/variables'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Poiret+One');

    body {
        font-family: 'Poiret One', cursive;
        font-size: 24px;
        color: ${champagne};
        background-color: ${rblack}
    }

    h1, h2, h3 {
        font-weight: normal;
    }
`